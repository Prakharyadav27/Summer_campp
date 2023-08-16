const cityName = document.getElementById("city-input");
const button = document.getElementById("submit-button");

const name = document.getElementById("name");
const time = document.getElementById("time");
const temp = document.getElementById("temp");

async function getData(cityname) {
  const data = await fetch(
    ` http://api.weatherapi.com/v1/current.json?key=999de70b0d37422f80a143121231408&q=${cityname}&aqi=yes`
  );

  return data.json();
}

button.addEventListener("click", async () => {
  const val = cityName.value;
  const result = await getData(val);
  name.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  time.innerText = `${result.location.localtime}`;
  temp.innerText = `${result.current.temp_c}  'C`;
});

// http://api.weatherapi.com/v1/current.json?key=999de70b0d37422f80a143121231408&q=London&aqi=yes
