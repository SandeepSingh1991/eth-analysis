async function fetchCryptoData() {
  const response = await fetch('/.netlify/functions/fetchCryptoData');
  const data = await response.json();
  console.log(data); // Check if data is logged in the browser console
  // Use this data to populate your table or charts
}

fetchCryptoData();
