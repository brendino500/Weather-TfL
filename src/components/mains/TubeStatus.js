import React from 'react'
import { getTubeStatus } from '../../lib/api'

class TubeStatus extends React.Component {
  state = {
    stations: null
  }

  async componentDidMount() {
    try {
      const res = await getTubeStatus()
      this.setState({ stations: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { stations } = this.state

    if (!stations) return null
    
    return (
      <>
        <div className="container2 tube-columns is-mobile" >
          {this.state.stations.map(stations => (
            <div key={stations.name}>
              <h1 className="tubes">{stations.name}</h1>
              <h1 className="tubes">{stations.lineStatuses[0].statusSeverityDescription}</h1>
            </div>
          ))}
        </div>
      </>
    )
  }
}


export default TubeStatus