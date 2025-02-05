async function fetchCryptoData() {
  const response = await fetch('/.netlify/functions/fetchCryptoData');
  const data = await response.json();
  console.log(data);  // Use this data in your charts or other visualizations
}

fetchCryptoData();
