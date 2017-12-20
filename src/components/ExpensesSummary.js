import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import sumExpenses from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expensesWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
        <h3>Viewing {expensesCount} {expensesWord} totalling {formatedExpensesTotal}</h3>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: sumExpenses(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
