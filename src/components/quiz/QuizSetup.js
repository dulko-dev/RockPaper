import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContex";

function QuizSetup() {
  const { name, question } = useContext(AppContext);
  const [userName, setUserName] = name;
  const [hiddentSite, setHiddenSite] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = question;
  const [quizSelect, setQuizSelect] = useState([]);
  const [quizCategory, setQuizCategory] = useState("select");
  const [quizDifficult, setQuizDifficult] = useState("select");
  const [error, setError] = useState(false);
  const sortQuizSelect = [...quizSelect];
  const history = useHistory();

  const categorySelect = document.getElementById("category");
  const difficultSelect = document.getElementById("difficult");
  const nameInput = document.getElementById("name");

  useEffect(() => {
    const fetchData = () => {
      fetch("https://opentdb.com/api_category.php")
        .then((res) => {
          if (!res) {
            throw new Error("Sorry memory");
          } else {
            return res.json();
          }
        })
        .then((data) => setQuizSelect(data.trivia_categories))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (nameInput && userName.length > 0) {
      nameInput.classList.remove("errorSubmit");
    }
    if (quizCategory !== "select") {
      categorySelect.classList.remove("errorSubmit");
    }
    if (quizDifficult !== "select") {
      difficultSelect.classList.remove("errorSubmit");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, quizCategory, quizDifficult]);

  useEffect(() => {
    localStorage.setItem("empty", JSON.stringify(hiddentSite));
  }, [hiddentSite]);

  const sortName = (a, b) => {
    const na = a.name;
    const nb = b.name;
    if (na < nb) {
      return -1;
    } else if (na > nb) {
      return 1;
    } else {
      return 0;
    }
  };

  const fetchDataAfterStart = async () => {
    await fetch(
      `https://opentdb.com/api.php?amount=10&category=${quizCategory}&difficulty=${quizDifficult}`
    )
      .then((res) => {
        if (!res) {
          throw new Error("Sorry, we have problem with connection");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data.response_code === 1) {
          setHiddenSite(true);
          return;
        } else {
          setQuestions(data);
          localStorage.setItem("question", JSON.stringify(data.results));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeCategory = (e) => {
    setQuizCategory(e.target.value);
  };
  const handleChangeDifficult = (e) => {
    setQuizDifficult(e.target.value);
  };
  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleStartGame = (e) => {
    e.preventDefault();
    if (
      userName.length === 0 ||
      quizCategory === "select" ||
      quizDifficult === "select"
    ) {
      if (userName.length === 0) {
        nameInput.classList.add("errorSubmit");
      }
      if (quizCategory === "select") {
        categorySelect.classList.add("errorSubmit");
      }
      if (quizDifficult === "select") {
        difficultSelect.classList.add("errorSubmit");
      }
      setError(true);
      return;
    }
    localStorage.setItem("user", JSON.stringify(userName));
    setError(false);
    fetchDataAfterStart();
    setTimeout(() => {
      return history.push("/quiz/test");
    }, 1000);
  };

  return (
    <div className="quizSetup">
      <h2>Quiz Settings</h2>
      {error && (
        <div className="quizSetup__error">Please Fill All the Fields</div>
      )}
      <form className="quizSetup__form" onSubmit={handleStartGame}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          className="form__name"
          placeholder="Enter Your Name"
          autoComplete="off"
          onChange={handleChangeName}
          value={userName}
        />
        <label htmlFor="category"></label>
        <select
          id="category"
          className="form__category"
          onChange={handleChangeCategory}
          value={quizCategory}
        >
          <option value="select">Select Category</option>
          {sortQuizSelect.sort(sortName).map((quiz) => {
            return (
              <option key={quiz.id} value={quiz.id}>
                {quiz.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="difficult"></label>
        <select
          id="difficult"
          className="form__difficult"
          onChange={handleChangeDifficult}
          value={quizDifficult}
        >
          <option value="select">Select Difficult</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="submit" className="form__btn">
          Start
        </button>
      </form>
    </div>
  );
}

export default QuizSetup;
