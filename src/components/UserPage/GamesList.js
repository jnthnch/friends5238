import React from 'react';

import './GamesList.css'
import { THE_ODDS_API_KEY } from '../../../constants';
import gamesList_mockData from '../../data/gamesList_mockData';
import SingleGame from './SingleGame';

const axios = require('axios')
const sport_key = 'basketball_ncaab'

const styles = {
  gameHeader: { display: 'flex', justifyContent: 'space-between' },
  gameBody: {}
}

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      games: []
    };
  }

  componentDidMount() {
    this.setState({
      games: gamesList_mockData,
      isLoaded: true,
    }, () => { console.log('setState callback', this.state) })
  }

  render() {
    const { error, isLoaded, games } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='gamesList_main'>
          <h1>List of Games</h1>
          <ul>
            <li style={styles.gameHeader}>
              <div>Upcoming</div>
              <div>Spread</div>
            </li>
            {/* <li style={{ listStyleType: 'none' }}>
              <SingleGame></SingleGame>
            </li> */}
            {games.map((game, idx) => {
              // console.log('game sites', game.sites[0].odds.spreads.points)
              // console.log('game spread', game.sites[0].odds.spreads.points)
              const homeTeam = game.teams[0];
              const awayTeam = game.teams[1];
              const homeSpread = game.sites[0].odds.spreads.points[0]
              const awaySpread = game.sites[0].odds.spreads.points[1]
              return (
                <li key={idx} style={{ listStyleType: 'none' }}>
                  <SingleGame
                    homeTeam={homeTeam}
                    awayTeam={awayTeam}
                    homeSpread={homeSpread}
                    awaySpread={awaySpread}
                  ></SingleGame>
                </li>
              )
            }

            )}
          </ul>
        </div>
      );
    }
  }
}

// WHEN MAKING API FETCHES
// componentDidMount() {
//   axios.get('https://api.the-odds-api.com/v3/odds', {
//     params: {
//       api_key: THE_ODDS_API_KEY,
//       sport: sport_key,
//       region: 'us', // uk | us | eu | au
//       mkt: 'spreads' // h2h | spreads | totals
//     }
//   }).then(response => {
//     this.setState({
//       isLoaded: true,
//       games: response.data.data
//     })
//     // odds_json['data'] contains a list of live and 
//     //   upcoming events and odds for different bookmakers.
//     // Events are ordered by start time (live events are first)
//     console.log(JSON.stringify(response.data.data, null, '\t'))

//     // Check your usage
//     console.log()
//     console.log('Remaining requests', response.headers['x-requests-remaining'])
//     console.log('Used requests', response.headers['x-requests-used'])

//   })
//     .catch(error => {
//       this.setState({
//         isLoaded: true,
//         error
//       });
//       console.log('Error status', error.response.status)
//       console.log(error.response.data)
//     })
// }

export default GamesList

