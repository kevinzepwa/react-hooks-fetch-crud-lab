import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [question, setQuestions] = useState({})
  const url = "http://localhost:4000/questions"




  const questions = {
    "id": 1,
    "prompt": "What special prop should always be included for lists of elements?",
    "answers": ["id", "name", "key", "prop"],
    "correctIndex": 2 
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setQuestions(newData);
    };
    
    fetchData();
  }, []);
  
  //setTimeout(console.log(questions), 10000);
  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm question={questions} /> : <QuestionList question={questions} />}
    </main>
  );
}

export default App;
