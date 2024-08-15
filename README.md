# Money Tracker: Manage Your Financial Income and Expenses

Welcome to the GitHub repository for **Money Tracker**, a mobile application designed to help you manage your financial income and expenses efficiently. This application is built using the **React Native** framework, making it cross-platform and highly responsive. The app utilizes **Redux** for global state management and implements a clean and modular code structure, leveraging hooks like `useState`, `useDispatch`, `useSelector`, and navigation through a bottom tab interface.

## Project Overview

Money Tracker allows users to track their finances, including income and expenses, in a streamlined and user-friendly manner. The app provides clear insights into your financial status with real-time updates, all managed through a seamless and intuitive interface.

### Key Features

- **Income and Expense Tracking**: Easily input and categorize financial transactions.
- **User Authentication**: Secure login system to protect your financial data.
- **Dynamic Balances**: Real-time updating of balances as new transactions are added.
- **Redux State Management**: Efficient state management with Redux to ensure data consistency.
- **Bottom Tab Navigation**: Smooth navigation between different app screens.
- **Customizable User Experience**: Personalize the app with your own username and other preferences.

## Application Layout

<p align="center">
  <img src="https://github.com/user-attachments/assets/5c6910fa-ad43-4d58-8812-9a405a753a5c" width="200" alt="Home Page">
  <img src="https://github.com/user-attachments/assets/68e7b88e-da75-4111-ace2-5b8e0bfffd4e" width="200" alt="Mutation Page">
  <img src="https://github.com/user-attachments/assets/ccba41c2-95ed-42c2-91c6-0faae29c9b34" width="200" alt="Input Modal">
</p>

## Libraries and Technologies Used

The Money Tracker application is built using modern technologies and follows best practices in React Native development:

- **React Native**: The core framework used to build the mobile application.
- **Redux**:
  - Manages the global state of the application, ensuring consistent and predictable state management.
- **React Navigation**:
  - `@react-navigation/bottom-tabs`: Implements bottom tab navigation for easy access to different screens.
  - `@react-navigation/native`: Core utilities for navigation.
- **Hooks**:
  - `useState`: Manages local state within components.
  - `useDispatch`: Dispatches actions to the Redux store.
  - `useSelector`: Selects data from the Redux store.
- **Props**: Used for passing data between components, ensuring modularity and reusability.
- **UI Components**:
  - `Ionicons`: Provides a rich set of icons for enhancing UI elements.
  - `Modal`: Used for transaction input and user interactions.
  - `FlatList`: Efficiently renders large lists of transactions.

## Architecture

The application is structured with a focus on modularity and separation of concerns. It employs the following architecture:

### Key Components

- **HomePage**: Displays the user's balance and a personalized welcome message.
- **MutationPage**: Manages and displays the list of income and expense transactions.
- **TransactionItem**: Represents each financial transaction with appropriate styling based on its type (income or expense).
- **AppNavigator**: Handles the navigation between different screens using a bottom tab navigator.

### Redux Integration

- **Actions**: Defines and dispatches actions like `addIncome`, `addExpense`, and `updateUserName`.
- **Reducers**: Handles state changes in response to actions dispatched from components.
