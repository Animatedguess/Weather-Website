import axios from 'axios';

export const weatherData = async (cityName) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=95e03e4fc4b1ae9f6008755e87e588cf&units=metric`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
