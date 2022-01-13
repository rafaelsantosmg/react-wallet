// Coloque aqui suas actions
import fetchApi from '../services/dataApi';

export const SAVE_USER = 'SAVE_USER';
export const CREATE_CURRENCIES = 'CREATE_CURRENCIES';
export const SAVE_WALLET_QUOTATIONS = 'SAVE_WALLET_QUOTATIONS';
export const SAVE_WALLET_EXPENSES = 'SAVE_WALLET_EXPENSES';
export const EDIT_WALLET_EXPENSES = 'EDIT_WALLET_EXPENSES';

export const saveUser = (email) => ({
  type: SAVE_USER,
  email,
});

export const saveWalletQuotations = (quotations) => ({
  type: SAVE_WALLET_QUOTATIONS,
  quotations,
});

export const saveWalletExpenses = (expenses) => ({
  type: SAVE_WALLET_EXPENSES,
  expenses,
});

export const createCurrencies = (currencies) => ({
  type: CREATE_CURRENCIES,
  currencies,
});

export const editWalletExpenses = (expenses) => ({
  type: EDIT_WALLET_EXPENSES,
  expenses,
});

const fetchRequest = () => async (dispatch) => {
  try {
    const response = await fetchApi();
    const data = await response;
    dispatch(createCurrencies(Object.keys(data)));
    dispatch(saveWalletQuotations(data));
  } catch (error) {
    console.error(error);
  }
};

export default fetchRequest;
