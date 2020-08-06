import axios from 'axios'
const tflUrl = 'https://api.tfl.gov.uk/'

export const getTubeStatus = () => {
  return axios.get(`${tflUrl}/line/mode/tube/status`)
}

export const getWeatherStatus = () => {
  return axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=London`)
}