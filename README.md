# Expense Tracker

A modern and feature-rich expense tracking application built with React, Vite, and Tailwind CSS.

## Features

### Authentication & User Management
- Secure login and signup functionality
- User profile management with photo upload
- Dark/Light theme support
- Persistent authentication state

### Dashboard
- Overview of total balance, income, and expenses
- Recent transactions list
- Financial overview with charts
- Last 30 days expense tracking
- Income and expense analytics

### Expense Management
- Add, view, and delete expenses
- Categorize expenses with custom icons
- Date-based expense tracking
- Expense visualization with charts
- Expense overview with trends

### Income Management
- Add, view, and delete income entries
- Track income sources
- Income visualization with charts
- Income history tracking

### UI/UX Features
- Responsive design for all screen sizes
- Modern and intuitive interface
- Interactive charts and graphs
- Toast notifications for user feedback
- Loading states and error handling

## React Components

### Layout Components
- `DashboardLayout`: Main layout wrapper for dashboard pages
- `AuthLayout`: Authentication pages layout
- `Navbar`: Top navigation bar with theme toggle
- `SideMenu`: Sidebar navigation with user profile

### Dashboard Components
- `InfoCard`: Display financial information cards
- `RecentTransactions`: Show recent transaction history
- `FinanceOverview`: Financial data visualization
- `ExpenseTransactions`: List of expense entries
- `Last30DaysExpenses`: Monthly expense tracking
- `RecentIncomeWithChart`: Income visualization

### Form Components
- `Input`: Reusable input component with validation
- `AddExpenseForm`: Form for adding new expenses
- `AddIncomeForm`: Form for adding new income
- `ProfilePhotoSelector`: Profile image upload component

### Chart Components
- `CustomBarChart`: Bar chart visualization
- `CustomLineChart`: Line chart visualization

### Utility Components
- `Modal`: Reusable modal dialog
- `DeleteAlert`: Confirmation dialog for deletions
- `CharAvatar`: User avatar with initials
- `TransactionInfoCard`: Transaction details display
- `EmojiPickerPopup`: Icon selector for categories

## Technologies Used
- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios for API calls
- Recharts for data visualization
- React Icons
- React Hot Toast
- Moment.js for date handling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
```
frontend/expense-tracker/
├── src/
│   ├── components/
│   │   ├── Charts/
│   │   ├── Dashboard/
│   │   ├── Expense/
│   │   ├── Income/
│   │   ├── Inputs/
│   │   ├── layouts/
│   │   └── cards/
│   ├── pages/
│   │   ├── Auth/
│   │   └── Dashboard/
│   ├── context/
│   ├── hooks/
│   └── utils/
└── public/
``` 
