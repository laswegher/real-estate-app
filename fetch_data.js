export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':
      '699c8a5544msh66ab30a8abeaaa5p1c2ed8jsn8d1e47fee9a0',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  },
};

export const fetchApi = async (url, option) => {
  const res = await fetch(url, option);
  const data = await res.json();

  return data;
};
