export const updateUserName = (name) => ({
  type: "UPDATE_USER_NAME",
  payload: name,
});

export const addIncome = (amount, description) => ({
  type: "ADD_INCOME",
  payload: { amount, description },
});

export const addExpense = (amount, description) => ({
  type: "ADD_EXPENSE",
  payload: { amount, description },
});
