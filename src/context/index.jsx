import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });


  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState([]);

  function handleFormSubmit(currentFormData){
    if (!currentFormData.description || !currentFormData.amount) return;

    setTotalTransaction([...totalTransaction, {...currentFormData, id : Date.now()}, ])
  }
  console.log(totalTransaction);
  

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        value,
        setValue,
        totalTransaction,
        setTotalTransaction,
        handleFormSubmit
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
