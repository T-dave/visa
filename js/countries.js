const params = new URLSearchParams(window.location.search);
const country = params.get('country'); // e.g., "South Africa"


if (countriesInfo[country]) {
  document.getElementById('country-name').textContent = country;
  document.getElementById('country-description').textContent = countriesInfo[country].description;
} else {
  document.getElementById('country-name').textContent = "Destination not found";
  document.getElementById('country-description').textContent = "Sorry, we couldn't find information about this destination.";
}
