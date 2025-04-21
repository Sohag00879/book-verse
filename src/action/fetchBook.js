export const searchBooks = async (query) => {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`, {
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
