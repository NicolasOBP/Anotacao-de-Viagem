import { useState } from "react";

export const handleState = () => {
  const [finishType, setFinishType] = useState(false);
  const [expenses, setExpenses] = useState(false);

  const activeExpenses = () => {
    setExpenses(true);
  };
  const deactiveExpenses = () => {
    setExpenses(false);
  };

  const activeFinish = () => {
    setFinishType(true);
  };
  const deactiveFinish = () => {
    setFinishType(false);
  };

  return {
    activeFinish,
    deactiveFinish,
    finishType,
    activeExpenses,
    deactiveExpenses,
    expenses,
  };
};
