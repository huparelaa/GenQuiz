import { createContext, useState } from "react";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(null);

  return (
    <QuestionsContext.Provider
      value={{ currentQuestionId, setCurrentQuestionId }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
