import { useState } from "react";

import styled from "styled-components";
import Card from "../components/Card";
import Form from "../components/Form";

const initialQuestions = [
  {
    id: 1,
    name: "Niklas",
    text: "Wie schreibe ich nochmal Imports?",
  },
  {
    id: 2,
    name: "Lene",
    text: "Können wir noch mehr Testing machen?!",
  },
  {
    id: 3,
    name: "Merle",
    text: "Wo ist mein Fahrrad?",
  },
  {
    id: 4,
    name: "Thomas",
    text: "Können wir Tailwind machen?",
  },
];

export default function Home() {
  const [questions, setQuestions] = useState(initialQuestions);

  function addQuestion(newQuestion) {
    setQuestions([newQuestion, ...questions]);
  }

  function removeQuestion(id) {
    setQuestions(questions.filter((card) => card.id !== id));
  }

  return (
    <BoardWrapper>
      <CardGrid>
        {questions.map((card) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              text={card.text}
              onRemoveQuestion={removeQuestion}
              id={card.id}
            />
          );
        })}
      </CardGrid>
      <Form onAddQuestion={addQuestion} />
    </BoardWrapper>
  );
}

const BoardWrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
`;

const CardGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 20px;
  overflow-y: auto;
`;
