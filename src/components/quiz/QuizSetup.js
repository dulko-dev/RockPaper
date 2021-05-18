import React, { useState } from "react";

function QuizSetup() {
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
        />
        <label htmlFor="category"></label>
        <select
          defaultValue="default"
          id="category"
          className="form__category"
          required
        >
          <option value="default" disabled>
            Select
          </option>
          <option value="1">Yoo</option>
        </select>
        <label htmlFor="difficult"></label>
        <select id="diffucult" className="form__difficult">
          Difficult
        </select>
        <button type="submit" className="form__btn">
          Start
        </button>
      </form>
    </div>
  );
}

export default QuizSetup;
