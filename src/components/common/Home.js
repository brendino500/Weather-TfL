import React from 'react'
import Clock from 'react-live-clock'
import { getWeatherStatus } from '../../lib/api'



class Home extends React.Component {
  state = {
    weather: null
  }

  async componentDidMount() {
    try {
      const res = await getWeatherStatus()
      // console.log(res.data)
      this.setState({ weather: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state)
    const { weather } = this.state

    if (!weather) return null 

    return (
    //     <section className="hero is-fullheight-with-navbar is-warning">
    //       <div className="hero-body">
    //         <div className="container">
    //           <h1 className="title is-1 has-text-centered has-text-black">{weather.location.country}</h1>
    //           <Clock className="title is-1 has-text-centered has-text-black" format={'HH:mm:ss'} ticking={true} />
    //         </div>
    //       </div>
    //     </section>
    //   )
    // }

      <section className="hero is-success is-fullheight">
        <div className="hero-head">
        </div>
        <div className="hero-body">
          <img src="src/images/background/nicolas-prieto-sMJaf08ugD0-unsplash.jpg" width="100%" height="100%" />
          <div className="container has-text-centered">
            <h1 className="title">
              {weather.location.country}
            </h1>
            <Clock className="title is-1 has-text-centered has-text-black" format={'HH:mm:ss'} ticking={true} />
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active"><a>Overview</a></li>
                <li><a>Modifiers</a></li>
                <li><a>Grid</a></li>
                <li><a>Elements</a></li>
                <li><a>Components</a></li>
                <li><a>Layout</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>


    )
  }
}

export default Home