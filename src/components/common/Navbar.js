import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    isOpen: false
  };

  handleNavToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  };

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
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <span
              onClick={this.handleNavToggle}
              className={`navbar-burger ${
                this.state.isOpen ? 'is-active' : ''
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navbarMenuHeroC"
            className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}
          >
            <div className="navbar-end">
              <Link to="/AirQuality" className="navbar-item">
                Air Quality
              </Link>
              <Link to="/BikeStatus" className="navbar-item">
                Bike Status
              </Link>
              <Link to="/TubeStatus" className="navbar-item">
                Tube Status
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Navbar)
