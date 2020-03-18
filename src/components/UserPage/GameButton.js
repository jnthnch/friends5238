import React from 'react';

const styles = {
  button: {
    // backgroundColor: 'grey',
    height: 30,
    width: 65,
    borderRadius: 65 / 2,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

function GameButton(props) {
  const { awaySpread } = props
  return (
    <button onClick={() => { console.log('clicked') }} style={styles.button}>
      5
    </button>
  )

}

export default GameButton