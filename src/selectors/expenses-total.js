//Return sum of expenses

export default (expenses) => {
  return !expenses ? 0 : expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
};