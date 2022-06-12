import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);  
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);  
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -t [API_KEY] для сохранения токена
    -h для вывода помощи
    `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgBlue(' WEATHER ')} Погода в городе ${chalk.blue(res.name)}
    ${icon} ${res.weather[0].description}
    Температура: ${chalk.white(Math.round(res.main.temp) + '°')} (ощущается как ${chalk.white(Math.round(res.main.feels_like) + '°')})
    Влажность: ${chalk.white(res.main.humidity + '%')}
    Скорость ветра: ${chalk.white(Math.round(res.wind.speed) + 'м/с')}
    `
  );
};

export { printError, printSuccess, printHelp, printWeather }