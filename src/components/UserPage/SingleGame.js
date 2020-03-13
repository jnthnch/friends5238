import React from 'react';
import PropTypes from 'prop-types';

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
    backgroundColor: 'gold'
  },
  spreads: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'blue'
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
        <div>{awaySpread}</div>
        <div>{homeSpread}</div>
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