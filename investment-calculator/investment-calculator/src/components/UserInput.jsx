export default function UserInput({onChange ,userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div className="Label-input">
          <label htmlFor="Initial Investment">Initial Investment</label>
          <input
            id="Initial Investment"
            type="number"
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          ></input>
        </div>
        <div className="Label-input">
          <label htmlFor="Annual Investment">Annual Investment</label>
          <input
            id="Annual Investment"
            type="number"
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          ></input>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="Expected return">Expected return</label>
          <input
            id="Expected return"
            type="number"
            required
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          ></input>
        </div>
        <div>
          <label htmlFor="Duration">Duration</label>
          <input
            id="Duration"
            type="number"
            required
            onChange={(event) =>
              onChange("Duration", event.target.value)
            }
            value={userInput.Duration}
          ></input>
        </div>
      </div>
    </section>
  );
}
