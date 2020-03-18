import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button.jsx'

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  teams: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'gold',
    height: 100
  },
  spreads: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    justifyContent: 'space-around',
    height: 100,
    width: 100
  }

}
const SingleGame = (props) => {
  const { homeTeam, awayTeam, homeSpread, awaySpread } = props;

  return (
    <div style={styles.main}>
      <div style={styles.teams}>
        <div>{awayTeam}</div>
        <div>{homeTeam}</div>
      </div>
      <div style={styles.spreads}>
        <Button>hello</Button>
        <Button>{homeSpread}</Button>
      </div>
    </div>
  )
}

SingleGame.propTypes = {
  homeTeam: PropTypes.string,
  awayTeam: PropTypes.string,
  homeSpread: PropTypes.string,
  awaySpread: PropTypes.string
}

SingleGame.defaultProps = {
  homeTeam: 'Home Team Here',
  awayTeam: 'Away Team Here',
  homeSpread: 'no spread',
  awaySpread: 'no spread'
}

export default SingleGame;