import React from 'react'
import { getWeatherStatus } from '../../lib/api'

class Home extends React.Component {
  state = {
    weather: null
  }


  async componentDidMount() {
    console.log(this.props)
    try {
      const res = await getWeatherStatus()
      console.log(res.data)
      this.setState({ name: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state)
    return (
      <section className="hero is-fullheight-with-navbar is-warning">
        <div className="hero-body">
          <div className="container">
            <p className="title is-1 has-text-centered has-text-black">
              <span role="img" aria-label="logo" className="logo-emoji"></span>Digital Time
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Home