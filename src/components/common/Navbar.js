import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  state = {
    isOpen: false
  }

  handleNavToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    return (
      <header className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>
            <span onClick={this.handleNavToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link to="/AirQuality"  className="navbar-item">AirQuality</Link>
              <Link to="/BikeStatus" className="navbar-item">BikeStatus</Link>
              <Link to="/TubeStatus" className="navbar-item">TubeStatus</Link>
              <Link to="/WeatherStatus" className="navbar-item">WeatherStatus</Link>
              <span className="navbar-item">
                <a className="button is-success is-inverted">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Navbar)