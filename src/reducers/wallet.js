// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SAVE_WALLET_QUOTATIONS,
  CREATE_CURRENCIES,
  SAVE_WALLET_EXPENSES,
  EDIT_WALLET_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  quotations: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_WALLET_QUOTATIONS:
    return {
      ...state,
      quotations: [action.quotations],
    };
  case CREATE_CURRENCIES:
    return {
      ...state,
      currencies: [...action.currencies],
    };
  case SAVE_WALLET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case EDIT_WALLET_EXPENSES:
    return {
      ...state,
      expenses: [...action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
