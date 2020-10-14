import axios from 'axios'
const tflUrl = 'https://api.tfl.gov.uk/'

export const getTubeStatus = () => {
  return axios.get(`${tflUrl}/line/mode/tube/status`)
}

export const getBikeStatus = () => {
  return axios.get(`${tflUrl}/BikePoint`)
}

export const getWeatherStatus = () => {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=London`
  )
}

export const getAirQuality = () => {
  return axios.get(`${tflUrl}/AirQuality`)
}
