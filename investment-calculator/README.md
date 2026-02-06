💰 **Investment Calculator (React)**
A sleek and interactive web application built with React.js that helps users project their wealth growth over time using compound interest calculations.

✨ **Features**
Real-time Calculation: Results update instantly as you modify input values.

Smart State Management: Implements "Lifting State Up" to ensure seamless data flow between the input forms and the results table.

Currency Formatting: Automatically formats all numerical outputs into USD currency using the Intl.NumberFormat API.

Professional UI: Features a custom-styled dark mode theme with a responsive layout designed using CSS Flexbox.

🚀 **Tech Stack**
Frontend Framework: React.js (Functional Components, Hooks)

**Build Tool**: Vite

**Styling: CSS3** (Custom properties, Flexbox)

**Language**: JavaScript (ES6+)

🛠️ **Installation & Setup**
To run this project locally, follow these steps:

Clone the repository:

Navigate into the project directory:

Install dependencies:

Start the development server:

📈 **How It Works**
The calculator processes four essential parameters:

**Initial Investment**: The starting balance.

**Annual Investment**: The amount added to the capital each year.

**Expected Return**: The annual interest rate (percentage).

**Duration**: The total investment timeframe in years.

The logic calculates the yearly interest, total interest accumulated, and the final investment value per year, presenting them in a structured table.

📁 **Folder Structure**
src/components/: Houses all React Components (Header, UserInput, Results).

src/util/: Contains the Core Calculation Logic (investment.js).

src/assets/: Stores static assets like the project logo.
