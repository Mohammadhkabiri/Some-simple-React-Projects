import logoInvestment from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={logoInvestment} alt="Logo for Showing money" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
