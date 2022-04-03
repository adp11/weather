const API_KEY = '398634b816b70a2d391979c5b9432d34';

const getURL = (arg) => {
  if (arg.length === 1) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${arg[0]}&APPID=${API_KEY}`;
  }
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${arg[0]}&lon=${arg[1]}&exclude=minutely&units=metric&appid=${API_KEY}`;
};

const getCoordinates = async (cityName) => {
  const response = await fetch(getURL([cityName]), { mode: 'cors' });
  if (response.status === 404) {
    throw new Error('City not found');
  }

  const cityData = await response.json();
  return cityData.coord;
};

const getRawData = async ({ lon, lat }) => {
  try {
    const response = await fetch(getURL([lat, lon]), { mode: 'cors' });
    const rawData = await response.json();

    return rawData;
  } catch (err) {
    throw new Error('Network error');
  }
};

const filterData = (rawData) => ({ current: rawData.current, hourly: rawData.hourly.slice(0, 24), daily: rawData.daily.slice(0, 8) });

export { getCoordinates, getRawData, filterData };
