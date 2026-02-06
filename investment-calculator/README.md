💰 Investment Calculator (React)
A sleek and interactive web application built with React.js that helps users project their wealth growth over time using compound interest calculations.

✨ Features
Real-time Calculation: Results update instantly as you modify input values.

Smart State Management: Implements "Lifting State Up" to ensure seamless data flow between the input forms and the results table.

Currency Formatting: Automatically formats all numerical outputs into USD currency using the Intl.NumberFormat API.

Professional UI: Features a custom-styled dark mode theme with a responsive layout designed using CSS Flexbox.

🚀 Tech Stack
Frontend Framework: React.js (Functional Components, Hooks)

Build Tool: Vite

Styling: CSS3 (Custom properties, Flexbox)

Language: JavaScript (ES6+)

🛠️ Installation & Setup
To run this project locally, follow these steps:

Clone the repository:

Navigate into the project directory:

Install dependencies:

Start the development server:

📈 How It Works
The application processes four key metrics provided by the user:

Initial Investment: The starting capital.

Annual Investment: The amount contributed every year.

Expected Return: The annual rate of return (percentage).

Duration: The total investment timeframe (years).

Using a compound interest algorithm, the app generates a year-by-year breakdown of interest earned, total interest, and the final investment value.

📁 Project Structure
src/components/: Contains UI components (Header, UserInput, Results).

src/util/: Houses the core mathematical logic for investment calculations.

src/App.jsx: The central hub managing the application's global state.
