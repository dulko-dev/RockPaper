import React, { useState, useEffect } from "react";

function QuizSetup() {
  const [quizSelect, setQuizSelect] = useState([]);
  const [quizCategory, setQuizCategory] = useState("select");
  const [userName, setUserName] = useState("");
  const [quizDifficult, setQuizDifficult] = useState("select");

  const sortQuizSelect = [...quizSelect];

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

  const handleChangeCategory = (e) => {
    setQuizCategory(e.target.value);
  };
  const handleChangeDifficult = (e) => {
    setQuizDifficult(e.target.value);
  };

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

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
        .then((data) => setQuizSelect(data.trivia_categories));
    };
    fetchData();
  }, []);

  console.log(quizCategory);

  return (
    <div className="quizSetup">
      <h2>Quiz Settings</h2>
      <div className="quizSetup__error">Please Fill All the Fields</div>
      <form className="quizSetup__form">
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
              <option key={quiz.id} value={quiz.name}>
                {quiz.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="difficult"></label>
        <select
          id="diffucult"
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
