**🚀 React Project Manager**
A modern, minimalist Project Management Application built with React and Tailwind CSS. This app allows users to create projects, set due dates, and manage tasks within a clean and intuitive interface.

**✨ Key Features**
Project Management: Easily create new projects with a title, description, and due date.

Dynamic UI: Seamlessly switch between the "No Project Selected" state, the "Add Project" form, and the "Project Details" view.

Input Validation: Integrated Custom Modal using React Portals to alert users about empty or invalid fields.

Responsive Design: Built with Tailwind CSS to ensure a beautiful layout on all screen sizes.

Advanced React Concepts: Implementation of Refs, Forwarding Refs, and Imperative Handle for optimized DOM interaction.

**🛠 Tech Stack**
Frontend Library: React.js

Styling: Tailwind CSS

Build Tool: Vite

State Management: React Hooks (useState, useRef, useImperativeHandle)

**🚀 Installation & Setup**
Follow these steps to run the project locally:

Clone the repository:

Navigate to the project directory:

Install dependencies:

Start the development server:

**📁 Project Structure**
Sidebar.jsx: Manages the list of projects and the "Add Project" trigger.

NewProject.jsx: Handles the logic for saving new projects and validating user input via useRef.

Modal.jsx: A reusable component utilizing createPortal to display overlays outside the main DOM hierarchy.

Input.jsx: A flexible component using forwardRef to handle both standard inputs and text areas.

SelectedProject.jsx: Displays details for a specific project and provides Delete functionality.

**📝 What I Learned**
During the development of this project, I deepened my understanding of:

Lifting State Up: Managing state in the App component to synchronize the Sidebar with the Content area.

Component Reusability: Creating generic Button and Input components to maintain a consistent UI/UX.

The Power of Refs: Using useRef for performance-optimized form handling instead of standard two-way binding for every keystroke.
