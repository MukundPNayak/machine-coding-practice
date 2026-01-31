import React, { useCallback, useEffect, useRef, useState } from "react";

import questions from "../constant/data.json";

import "./quizapp.css";

const QuizApp = () => {
  const questionLength = questions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questionLength).fill(null),
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleSubmit = useCallback(() => {
    if (isSubmitted) return;
    clearInterval(intervalRef.current);
    const score = selectedAnswers.reduce((acc, curr, index) => {
      if (curr === questions[index].correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setIsSubmitted(true);
    setScore(score);
  }, [selectedAnswers, isSubmitted]);

  useEffect(() => {
    if (timeRemaining === 0) {
      handleSubmit();
    }
  }, [timeRemaining, handleSubmit]);

  const currentQuestion = questions[currentQuestionIndex];

  const handlePrevClick = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleOptionSelect = (index) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[currentQuestionIndex] = index;
      return updatedAnswers;
    });
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questionLength).fill(null));
    setIsSubmitted(false);
    setScore(0);
    setTimeRemaining(30);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="container">
        <span>You have scored {score}</span>
        <button className="btn" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    );
  }

  const getFormattedRemainingTime = () => {
    const mins = Math.floor(timeRemaining / 60).toString();
    const seconds = Math.floor(timeRemaining % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${mins}:${formattedSeconds}`;
  };

  return (
    <div className="container">
      <span>Time Remaining: {getFormattedRemainingTime()}</span>
      <br />
      <span>{currentQuestion.question}</span>
      <div className="question-container">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswers[currentQuestionIndex] === index;

          const selectedClassName = isSelected ? "selected" : "";

          return (
            <span
              key={option.id}
              className={`${selectedClassName} option`}
              onClick={() => handleOptionSelect(index)}
            >
              {option}
            </span>
          );
        })}
      </div>
      <div className="btn-container">
        {currentQuestionIndex > 0 && (
          <button className="btn" onClick={handlePrevClick}>
            Prev
          </button>
        )}
        {currentQuestionIndex < questionLength - 1 && (
          <button
            className="btn"
            onClick={handleNextClick}
            disabled={selectedAnswers[currentQuestionIndex] === null}
          >
            Next
          </button>
        )}
        {currentQuestionIndex === questionLength - 1 && (
          <button
            className="btn"
            onClick={handleSubmit}
            disabled={selectedAnswers[currentQuestionIndex] === null}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
