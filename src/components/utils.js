const makeTitleCase = (cityName) => {
  const newName = cityName.toLowerCase().split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return newName.join(' ');
};

const getTimeFromUnixTime = (unixTime) => {
  const date = new Date(unixTime * 1000);
  return `${`${date.getHours()}`.padStart(2, '0')}:${`${date.getMinutes()}`.padEnd(2, '0')}`;
};

const getDayFromUnixTime = (unixTime) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = new Date(unixTime * 1000);
  return days[date.getDay()];
};

const celsiusToFah = (stat) => Math.round((parseInt(stat, 10) * 1.8 + 32));

const fahToCelsius = (stat) => Math.round(((parseInt(stat, 10) - 32) * (5 / 9)));

export {
  makeTitleCase, getTimeFromUnixTime, celsiusToFah, fahToCelsius, getDayFromUnixTime,
};
