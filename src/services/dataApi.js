const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchApi;
