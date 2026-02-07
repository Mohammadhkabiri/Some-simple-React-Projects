# 🎨 **ReactArt**

A modern, stylish web application built with **React** for a community of artists and art-lovers. This project demonstrates advanced UI techniques, combining **Tailwind CSS** for component-level styling and custom **CSS** for complex layouts and animations.

## 🚀 **Key Features**

* **Dynamic Authentication Form**: A robust login interface that handles user input and form submission.
* **Real-time Validation**: Instant visual feedback for invalid email formats or short passwords using conditional CSS classes.
* **Hybrid Styling Approach**:
* **Tailwind CSS**: Utilized for utility-first styling in reusable components like the `Input` field.
* **Custom CSS**: Used for intricate SVG backgrounds, typography (Google Fonts), and hover effects.


* **Reusable Component Architecture**: Clean separation of concerns with dedicated components for `Header`, `Input`, and `AuthInputs`.

## 🛠️ **Tech Stack**

* **Frontend**: React.js
* **Styling**:
* Tailwind CSS
* Standard CSS3 with Keyframe Animations


* **Build Tool**: Vite
* **Design Assets**: SVG Backgrounds and custom logo integration

## 📁 **Project Structure**

* `AuthInputs.jsx`: Manages the state for email and password inputs, including validation logic.
* `Input.jsx`: A reusable UI component that leverages **Tailwind** for consistent labeling and input styling.
* `Header.jsx`: Displays the branding, including the **ReactArt** logo and community tagline.
* `index.css`: Contains the global layout, including a fixed SVG background and themed button styles.

## 💻 **Getting Started**

1. **Clone the repository:**


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


## 📝 **Validation Logic**

The application performs the following checks before considering inputs valid:

* **Email**: Must contain an `@` symbol.
* **Password**: Must be at least **6 characters** long.
* **Visual Feedback**: If validation fails upon clicking "Sign In", fields turn red using the `.invalid` CSS class.

