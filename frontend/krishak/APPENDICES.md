# Appendices

## Appendix A: Project Structure
```
expense-tracker/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── context/
│   └── public/
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    └── server.js
```

## Appendix B: Key API Endpoints
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/expenses` - Get all expenses
- POST `/api/expenses` - Add new expense
- GET `/api/income` - Get all income entries
- GET `/api/dashboard` - Get dashboard data

## Appendix C: Database Models

### User
```javascript
{
  name: String,
  email: String,
  password: String (hashed)
}
```

### Expense
```javascript
{
  userId: ObjectId,
  category: String,
  amount: Number,
  date: Date
}
```

### Income
```javascript
{
  userId: ObjectId,
  source: String,
  amount: Number,
  date: Date
}
```

## Appendix D: Main Components
1. **Dashboard**
   - InfoCards
   - RecentTransactions
   - FinanceOverview
   - Charts

2. **Expense Management**
   - ExpenseOverview
   - ExpenseList
   - AddExpenseForm

3. **Income Management**
   - IncomeOverview
   - IncomeList
   - AddIncomeForm

## Appendix E: Chart Types
- Line Chart: Expense trends over time
- Bar Chart: Category-wise expenses
- Pie Chart: Financial overview

## Appendix F: Environment Setup
```env
# Frontend
VITE_API_URL=http://localhost:5000

# Backend
PORT=5000
MONGODB_URI=mongodb://localhost:27017/expense-tracker
JWT_SECRET=your_jwt_secret
```

## Appendix G: Key Dependencies
```json
{
  "frontend": {
    "react": "^19.0.0",
    "react-router-dom": "^7.5.3",
    "recharts": "^2.15.3"
  },
  "backend": {
    "express": "^5.1.0",
    "mongoose": "^8.14.2",
    "jsonwebtoken": "^9.0.2"
  }
}
```

## Appendix H: Security
- JWT Authentication
- Password Hashing
- Protected Routes
- Input Validation 