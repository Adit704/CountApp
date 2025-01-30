# CountApp
# React Counter App with MVI Architecture and RxJS

This project is a simple counter application built with **React** using **Vite** for fast development, **RxJS** for reactive programming, and follows the **MVI (Model-View-Intent)** architecture pattern.

## Features:
- **Counter**: Displays the current count value.
- **Increment/Decrement**: Buttons to increment or decrement the counter.
- **Reset**: Resets the counter to 0.
- **Auto Increment Toggle**: Starts/stops automatic increment with a toggle button.

## Architecture:
The app follows the **MVI architecture**:
- **Model**: Handles state management and auto-increment logic.
- **View**: Displays the counter and handles UI updates.
- **Intent**: Handles user actions like increment, decrement, and reset.

## Setup and Installation

### 1️⃣ Create a new React project with Vite

```bash
npm create vite@latest my-react-counter-app --template react
cd my-react-counter-app

src/
|-- components/
|   |-- CounterView.js        # View component that displays the counter and handles UI updates
|-- model/
|   |-- counterModel.js       # Model that manages the state and auto-increment logic using RxJS
|-- intent/
|   |-- counterIntent.js      # Intent that handles user actions like increment, decrement, and reset
|-- App.js                    # Main component that ties everything together
|-- main.jsx                  # Entry point for the application
|-- counterView.css           # Styles for the counter view
