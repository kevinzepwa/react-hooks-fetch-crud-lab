import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {question} ) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* display QuestionItem components here after fetching */}
      <ul><QuestionItem question={question}/></ul>
    </section>
  );
}

export default QuestionList;
