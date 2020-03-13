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
  const { homeTeam, awayTeam } = props;

  return (
    <div style={styles.main}>
      <div style={styles.teams}>
        <div>{awayTeam}</div>
        <div>{homeTeam}</div>
      </div>
      <div style={styles.spreads}>
        <div>-10</div>
        <div>+10</div>
      </div>
    </div>
  )
}

SingleGame.propTypes = {
  homeTeam: PropTypes.string,
  awayTeam: PropTypes.string,
}

SingleGame.defaultProps = {
  homeTeam: 'Home Team Here',
  awayTeam: 'Away Team Here'
}

export default SingleGame;