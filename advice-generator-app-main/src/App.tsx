import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState<{ id: number; advice: string }>({
    id: 117,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and take action.",
  });

  const fetchData = async () => {
    fetch("https://api.adviceslip.com/advice").then(async (res) => {
      const response = await res.json();
      console.log("response", response.slip.advice);
      setAdvice(response.slip);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="advice-box">
        <div className="advice-id">ADVICE #{advice.id}</div>
        <div className="advice-text">
          &ldquo;
          {advice.advice}
          &rdquo;
        </div>
        <img
          className="advice-divider"
          src="/images/pattern-divider-desktop.svg"
        />
        <div className="advice-dice" onClick={fetchData}>
          <img src="/images/icon-dice.svg" className="dice-image" />
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Paritosh Nichat</a>.
      </div>
    </>
  );
}

export default App;
