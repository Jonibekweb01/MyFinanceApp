import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state for expenses
const initialExpensesState = {
  expenses: [],
};

// Slice for expenses
const expensesSlice = createSlice({
  name: "expenses",
  initialState: initialExpensesState,
  reducers: {
    addExpense(state, action) {
      state.expenses.push(action.payload);
    },
    updateExpense(state, action) {
      const { id, updatedData } = action.payload;
      const expenseIndex = state.expenses.findIndex((exp) => exp.id === id);
      if (expenseIndex !== -1) {
        state.expenses[expenseIndex] = {
          ...state.expenses[expenseIndex],
          ...updatedData,
        };
      }
    },
    deleteExpense(state, action) {
      state.expenses = state.expenses.filter(
        (exp) => exp.id !== action.payload
      );
    },
  },
});

// Initial state for budgets
const initialBudgetsState = {
  budgets: [],
};

// Slice for budgets
const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialBudgetsState,
  reducers: {
    addBudget(state, action) {
      state.budgets.push(action.payload);
    },
    updateBudget(state, action) {
      const { id, updatedData } = action.payload;
      const budgetIndex = state.budgets.findIndex((bud) => bud.id === id);
      if (budgetIndex !== -1) {
        state.budgets[budgetIndex] = {
          ...state.budgets[budgetIndex],
          ...updatedData,
        };
      }
    },
    deleteBudget(state, action) {
      state.budgets = state.budgets.filter((bud) => bud.id !== action.payload);
    },
  },
});

// Initial state for financial goals
const initialGoalsState = {
  goals: [],
};

// Slice for financial goals
const goalsSlice = createSlice({
  name: "goals",
  initialState: initialGoalsState,
  reducers: {
    addGoal(state, action) {
      state.goals.push(action.payload);
    },
    updateGoal(state, action) {
      const { id, updatedData } = action.payload;
      const goalIndex = state.goals.findIndex((goal) => goal.id === id);
      if (goalIndex !== -1) {
        state.goals[goalIndex] = { ...state.goals[goalIndex], ...updatedData };
      }
    },
    deleteGoal(state, action) {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },
  },
});

// Configure the store
const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
    budgets: budgetsSlice.reducer,
    goals: goalsSlice.reducer,
  },
});

export const expensesActions = expensesSlice.actions;
export const budgetsActions = budgetsSlice.actions;
export const goalsActions = goalsSlice.actions;

export default store;
