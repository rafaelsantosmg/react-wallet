// Coloque aqui suas actions
import fetchApi from '../services/dataApi';

export const SAVE_USER = 'SAVE_USER';
export const CREATE_CURRENCIES = 'CREATE_CURRENCIES';
export const SAVE_WALLET_CURRENCY = 'SAVE_WALLET_CURRENCY';
export const SAVE_WALLET_EXPENSES = 'SAVE_WALLET_EXPENSES';
export const FILTER_WALLET_EXPENSES = 'FILTER_WALLET_EXPENSES';

export const saveUser = (email) => ({
  type: SAVE_USER,
  email,
});

export const saveWalletCurrency = (currencies) => ({
  type: SAVE_WALLET_CURRENCY,
  currencies,
});

export const saveWalletExpenses = (expenses) => ({
  type: SAVE_WALLET_EXPENSES,
  expenses,
});

export const filterWalletExpenses = (expenses) => ({
  type: FILTER_WALLET_EXPENSES,
  expenses,
});

export const createCurrencies = (currenciesKey) => ({
  type: CREATE_CURRENCIES,
  currenciesKey,
});

const fetchRequest = () => async (dispatch) => {
  try {
    const response = await fetchApi();
    const data = await response;
    dispatch(createCurrencies(Object.keys(data)));
    dispatch(saveWalletCurrency(data));
  } catch (error) {
    console.error(error);
  }
};

export default fetchRequest;
