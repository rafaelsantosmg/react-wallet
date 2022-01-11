// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_WALLET_CURRENCY, CREATE_CURRENCIES, SAVE_WALLET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currenciesKey: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_WALLET_CURRENCY:
    return {
      ...state,
      currencies: [action.currencies],
    };
  case CREATE_CURRENCIES:
    return {
      ...state,
      currenciesKey: action.currenciesKey,
    };
  case SAVE_WALLET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
