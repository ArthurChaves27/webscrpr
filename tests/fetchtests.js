async function getData() {
  const url = "https://books.toscrape.com/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.text();
    console.log(result.length());
  } catch (error) {
    console.error(error.message);
  }
}

getData();
