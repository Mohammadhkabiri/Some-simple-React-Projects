
**🚀 The Countdown Game**
A fast-paced, precision-based web game built with React JS where players must test their internal clock by stopping a timer as close to the target time as possible.

**📝 Key Features**
Dynamic Player Identity: Utilizes useRef to capture player names efficiently without triggering unnecessary re-renders during input.

Precision Timing: Implements high-frequency setInterval logic (every 10ms) to track remaining time with millisecond accuracy.

Advanced Modal Logic: Uses forwardRef and useImperativeHandle to expose internal modal controls (like .showModal()) to parent components.

Interactive Progress Tracking: Features a real-time <progress> bar that visually depletes as the challenge time runs out.

Smart Scoring System: Calculates a percentage-based score based on how much time was left when the player stopped the timer.

Enhanced UX: Supports Keyboard Events (Enter key) for setting the player name and provides visual feedback for active challenges.

**🛠 Technical Stack
Framework: React JS**

**State Management**: useState for time tracking and UI updates.

**DOM Manipulation**: useRef for direct element interaction and timer persistence.

**Styling**: Custom CSS with support for dynamic classes based on game state.

**💻 Installation & Setup**

npm install
Launch the development server:

Bash
npm run dev
**💡 Engineering Highlights**
The core of this project focuses on component synchronization.
By leveraging forwardRef, the ResultModal component provides a clean API for the TimeChallenge component to trigger UI states.
Additionally, the use of Refs for the timer instance ensures that the interval is correctly cleared and managed across the component lifecycle, preventing memory leaks.
