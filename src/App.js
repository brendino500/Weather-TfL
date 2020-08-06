import React from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'


import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import AirQuality from './components/mains/AirQuality'
import BikeStatus from './components/mains/BikeStatus'
import TubeStatus from './components/mains/TubeStatus'
import WeatherStatus from './components/mains/WeatherStatus'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/AirQuality" component={AirQuality} />
        <Route path="/BikeStatus" component={BikeStatus} />
        <Route path="/TubeStatus" component={TubeStatus} />
        <Route path="/WeatherStatus" component={WeatherStatus} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
