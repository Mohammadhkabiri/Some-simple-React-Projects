import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Result.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 120,
    expectedReturn: 6,
    Duration: 10,
  });

  const isValidInput = userInput.Duration >= 1;

  function handleChangeInput(inputIdentifier, changedValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +changedValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChangeInput} userInput={userInput} />
      {!isValidInput && <p>Please Enter Valid Duration</p>}
      {isValidInput && <Results userInput={userInput} />}
    </>
  );
}

export default App;
