import { getCoordinates, getRawData, filterData } from './api';
import {
  getTimeFromUnixTime, makeTitleCase, celsiusToFah, fahToCelsius, getDayFromUnixTime,
} from './utils';

let count = 1;

export default class UI {
  static loadHomepage() {
    UI.openDefault();
    UI.addQueryListeners();
    UI.addSliderListeners();
    UI.addUnitSwitchButtonListeners();
  }

  static openDefault() {
    UI.processQuery('San Francisco').then((data) => {
      UI.loadCurrentWeather(data);
      UI.loadHourlyWeather(data);
      UI.refreshHourlyWeather(null, 1);
      UI.refreshDots(0);
      UI.loadDailyWeather(data);
    });
  }

  static addQueryListeners() {
    const input = document.querySelector("input[type='search']");
    input.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter' && UI.isValidQuery()) {
        UI.processQuery(input.value).then((data) => {
          UI.loadCurrentWeather(data);
          UI.loadHourlyWeather(data);
          UI.refreshHourlyWeather(null, 1);
          UI.refreshDots(0);
          UI.loadDailyWeather(data);
        });
      }
    });
  }

  // Need param 'position' because need to know which dot is being active. (Start from 1)
  static refreshDots(position) {
    const navDots = document.querySelectorAll('.dot');
    navDots.forEach((dot, index) => {
      if (index !== position) {
        dot.classList.remove('current');
      } else {
        dot.classList.add('current');
      }
    });
  }

  // Need param 'type' to correspond relevant actions to different DOM listeners
  // Need param 'position' to know which direction to slide (left/right/jump)
  static refreshHourlyWeather(type = null, position = null) {
    if (type === 'back') {
      if (count === 0) {
        count = 3;
      } else {
        count -= 1;
      }
    } else if (type === 'next') {
      if (count === 3) {
        count = 1;
      } else {
        count += 1;
      }
    } else if (position !== null) {
      count = position;
    }

    const hourlyBoxes = document.querySelectorAll('.hourly-box');
    hourlyBoxes.forEach((box, index) => {
      if (Math.floor(index / 8) === count - 1) {
        box.classList.remove('hidden');
      } else {
        box.classList.add('hidden');
      }
    });
  }

  static addSliderListeners() {
    const backward = document.querySelector('.fa-angle-left');
    const forward = document.querySelector('.fa-angle-right');
    const navDots = document.querySelectorAll('.dot');

    backward.addEventListener('click', () => {
      UI.refreshHourlyWeather('back');
      UI.refreshDots(count - 1);
    });

    forward.addEventListener('click', () => {
      UI.refreshHourlyWeather('next');
      UI.refreshDots(count - 1);
    });

    navDots.forEach((dot, idx) => dot.addEventListener('click', () => {
      UI.refreshHourlyWeather(null, idx + 1);
      UI.refreshDots(idx);
    }));
  }

  static loadCurrentWeather(data, defaultCity = 'San Francisco') {
    const input = document.querySelector("input[type='search']");
    const cityName = document.querySelector('.city-name');
    const weatherStatus = document.querySelector('.weather-status');
    const temp = document.querySelector('.temp');
    const lowTemp = document.querySelector('.low');
    const highTemp = document.querySelector('.high');
    const stats = document.querySelectorAll('.stat-box .stat');

    cityName.textContent = (input.value) ? makeTitleCase(input.value) : defaultCity;
    weatherStatus.textContent = makeTitleCase(data.current.weather[0].description);
    temp.textContent = Math.round(data.current.temp);
    lowTemp.textContent = Math.round(data.daily[0].temp.min);
    highTemp.textContent = Math.round(data.daily[0].temp.max);

    const subData = [
      Math.round(data.current.feels_like),
      data.current.humidity,
      (Math.round(data.hourly[0].pop * 10) / 10),
      getTimeFromUnixTime(data.current.sunrise),
      getTimeFromUnixTime(data.current.sunset),
      Math.round(data.current.uvi * 10) / 10,
    ];

    stats.forEach((stat, index) => {
      stat.textContent = subData[index];
    });
  }

  static createHourlyBoxes() {
    const hourlyWeather = document.querySelector('.hourly-weather');

    for (let i = 0; i < 24; i++) {
      const hourlyBox = document.createElement('div');
      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      const div3 = document.createElement('div');

      hourlyBox.classList.add('hourly-box');
      hourlyBox.append(div1, div2, div3);
      hourlyWeather.append(hourlyBox);
    }
  }

  static loadHourlyWeather(data) {
    UI.createHourlyBoxes();
    const hourlyBoxes = document.querySelectorAll('.hourly-box');

    hourlyBoxes.forEach((hourlyBox, index) => {
      hourlyBox.children[0].textContent = getTimeFromUnixTime(data.hourly[index].dt);
      hourlyBox.children[1].innerHTML = `${Math.round(data.hourly[index].temp)}&#176;`;
      hourlyBox.children[2].style.backgroundImage = `url(https://openweathermap.org/img/wn/${data.hourly[index].weather[0].icon}@2x.png)`;
    });
  }

  static createDailyWeather() {
    const dailyWeather = document.querySelector('.daily-section');
    dailyWeather.innerHTML += `
    <table>
      <colgroup>
      <col><col><col><col>
      </colgroup>
      <thead>
        <td colspan="2">DAY</td>
        <th>CHANCE OF RAIN</th>
        <th>TEMPERATURE</th>
      </thead>
      <tbody>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
      </tbody>
    </table>`;
  }

  static loadDailyWeather(data) {
    UI.createDailyWeather();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach((row, index) => {
      const rowChildren = row.children;

      rowChildren[0].textContent = getDayFromUnixTime(data.daily[index].dt);

      const icon = document.createElement('img');
      icon.style.content = `url(https://openweathermap.org/img/wn/${data.daily[index].weather[0].icon}@2x.png)`;
      rowChildren[1].append(icon);

      rowChildren[2].textContent = `${Math.round(data.daily[index].pop * 100)}%`;

      rowChildren[3].innerHTML = `<span>${Math.round(data.daily[index].temp.max)}</span>&#176;  \t <span>${Math.round(data.daily[index].temp.min)}</span>&#176;`;
    });
  }

  static isValidQuery() {
    const input = document.querySelector('input[type="search"]');
    if (input.value.trim() === '') {
      return false;
    }
    if (input.validity.patternMismatch) {
      input.setCustomValidity('Invalid city name. City names must not a) have leading/trailing special characters and b) contain any characters that are not within the English alphabet. Some valid examples: \'Seattle\', \'San Francisco\', \'Ho Chi Minh\'.');
      input.reportValidity();
      return false;
    }
    input.setCustomValidity('');
    return true;
  }

  static async processQuery(value) {
    try {
      const coordinates = await getCoordinates(value);
      const rawData = await getRawData(coordinates);
      const weatherData = filterData(rawData);
      return weatherData;
    } catch {
      alert('No city found');
      throw new Error('No city found.');
    }
  }

  static addUnitSwitchButtonListeners() {
    const temp = document.querySelector('.temp');
    const lowTemp = document.querySelector('.low');
    const highTemp = document.querySelector('.high');
    const feelsLike = document.querySelector('.stat:first-of-type');
    const singles = [temp, lowTemp, highTemp, feelsLike];

    const button = document.querySelector('.unit-switch-button');

    button.addEventListener('click', () => {
      const hourlyBoxes = document.querySelectorAll('.hourly-box');
      const dailies = document.querySelectorAll('tbody tr td:last-child');

      if (hourlyBoxes[0] !== undefined && dailies[0] !== undefined) {
        if (button.children[0].classList.contains('bold')) {
          button.children[0].classList.toggle('bold');
          button.children[1].classList.toggle('bold');

          singles.forEach((single) => { single.textContent = celsiusToFah(single.textContent); });
          hourlyBoxes.forEach((box) => { box.children[1].innerHTML = `${celsiusToFah(box.children[1].textContent)}&#176;`; });
          dailies.forEach((daily) => {
            daily.children[0].textContent = celsiusToFah(daily.children[0].textContent);
            daily.children[1].textContent = celsiusToFah(daily.children[1].textContent);
          });
        } else {
          button.children[0].classList.toggle('bold');
          button.children[1].classList.toggle('bold');

          singles.forEach((single) => { single.textContent = fahToCelsius(single.textContent); });
          hourlyBoxes.forEach((box) => { box.children[1].innerHTML = `${fahToCelsius(box.children[1].textContent)}&#176;`; });
          dailies.forEach((daily) => {
            daily.children[0].textContent = fahToCelsius(daily.children[0].textContent);
            daily.children[1].textContent = fahToCelsius(daily.children[1].textContent);
          });
        }
      }
    });
  }
}
