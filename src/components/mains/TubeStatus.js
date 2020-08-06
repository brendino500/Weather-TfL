import React from 'react'
import { getTubeStatus } from '../../lib/api'

class TubeStatus extends React.Component {
  state = {
    stations: null
  }

  async componentDidMount() {
    try {
      const res = await getTubeStatus()
      console.log(res.data)
      this.setState({ stations: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state)
    const { stations } = this.state

    if (!stations) return null
    
    return (
      <>
        <div className="columns is-multiline">
          {this.state.stations.map(stations => (
            <div key={stations.name}>
              <h1>{stations.name}</h1>
              <h1>{stations.lineStatuses[0].statusSeverityDescription}</h1>
            </div>
          ))}
        </div>
      </>
    )
  }
}


export default TubeStatus