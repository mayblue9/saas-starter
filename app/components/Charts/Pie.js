import React, { Component } from 'react';
import PieChart from 'react-svg-piechart';
import styles from './pie.css';

export default class Pie extends Component {
  constructor() {
    super()

    this.state = {
      expandedSector: null,
    }
  }

  handleMouseEnterOnSector(sector) {
    this.setState({ expandedSector: sector })
  }

  handleMouseLeaveFromSector() {
    this.setState({ expandedSector: null })
  }

  render() {

    return (
      <div className={styles.wrapper}>
        <h4>{this.props.chartName}</h4>
        <div className={styles.grid}>
          <div className={styles.halfColumn}>
            <PieChart
              data={ this.props.data }
              expandedSector={ this.state.expandedSector }
              onMouseEnterOnSector={ ::this.handleMouseEnterOnSector }
              onMouseLeaveFromSector={ ::this.handleMouseLeaveFromSector }
            />
          </div>

          <div className={styles.halfColumn}>
          {
            this.props.data.map((d, i) => (
              <div key={ i }>
                <span style={{
                    fontSize: this.state.expandedSector == i ? '1.1em' : '.9em',
                    color: this.state.expandedSector == i ? d.color : null
                  }}>
                  { d.label } : { d.value }
                </span>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    )
  }
}
