import React from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'


import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import AirQuality from './components/mains/AirQuality'
import BikeStatus from './components/mains/BikeStatus'
import TubeStatus from './components/mains/TubeStatus'

class App extends React.Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(`Lat is: ${position.coords.latitude}`)
      console.log(`Long is: ${position.coords.longitude}`)
    }) 
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/AirQuality" component={AirQuality} />
          <Route path="/BikeStatus" component={BikeStatus} />
          <Route path="/TubeStatus" component={TubeStatus} />
        </Switch>
      </BrowserRouter>
    )
  }
}


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/AirQuality" component={AirQuality} />
//         <Route path="/BikeStatus" component={BikeStatus} />
//         <Route path="/TubeStatus" component={TubeStatus} />
//         <Route path="/WeatherStatus" component={WeatherStatus} />
//       </Switch>
//     </BrowserRouter>
//   )
// }

export default App
