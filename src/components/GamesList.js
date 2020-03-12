import React from 'react';

import { THE_ODDS_API_KEY } from '../../constants';
import gamesList_mockData from '../data/gamesList_mockData'

const axios = require('axios')
const sport_key = 'basketball_ncaab'

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
      isLoaded: true,
      games: gamesList_mockData
    })
  }
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

  render() {
    const { error, isLoaded, games } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {games.map((game, idx) => (
            <li key={idx}>
              {game.teams[0]} {game.teams[1]}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default GamesList