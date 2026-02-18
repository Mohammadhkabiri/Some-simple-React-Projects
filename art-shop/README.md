قElegant Context - React Shopping Cart
A sophisticated e-commerce interface built with React, featuring a dynamic shopping cart system. This project demonstrates advanced React patterns for state management, component communication, and DOM manipulation.

🚀 Features
Dynamic Product Listing: Renders a collection of products dynamically from data.

Stateful Shopping Cart: Users can add items, increase/decrease quantities, or remove items entirely from the cart.

Real-time Calculations: Automatically calculates the total cart price and item count in the header.

Accessible Modals: Implements a cart overlay using the HTML5 <dialog> element and React Portals.

🛠️ Technical Deep Dive
This project serves as a showcase for several core React concepts:

Lifting State Up: All cart logic is centralized in the App.jsx component to ensure a single source of truth for the data.

Advanced Refs: Utilizes forwardRef and useImperativeHandle to provide a clean API for controlling the Modal component from the Header.

React Portals: Uses createPortal to render the cart modal at the root of the DOM, ensuring proper z-index management and accessibility.

CSS Modules/Global Styling: A customized, elegant dark-themed UI with smooth CSS animations for a premium feel.

📂 Project Structure
App.jsx: The engine of the application, managing the shopping cart state and business logic.

CartModal.jsx: A reusable, highly decoupled modal component.

Header.jsx: Displays the brand and provides access to the cart via a synchronized item counter.

Shop.jsx & Product.jsx: Components responsible for mapping and displaying the product catalog.

🛠️ Installation & Setup
Clone the repository:

Install dependencies:

Start the development server
