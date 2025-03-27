export const httpClient = {
  get: async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ошибка загрузки данных");
    return res.json();
  },
};
