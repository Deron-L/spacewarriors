// created by Darren L

var utils = require('../lib/utils.js');

var melk = {
  info: {
    name: 'melk',
    style: 2
  },
  ai: (playerState, enemiesStates, gameEnvironment) => {
   if(gameEnvironment.ammoPosition.length >= 1){
      if(playerState.position[0] > gameEnvironment.ammoPosition[0][0]
        && playerState.position != 'north'){
        console.log('turning north');
        return 'north';
      }
      if(playerState.position[0] < gameEnvironment.ammoPosition[0][0]
        && playerState.position != 'south'){
        console.log('turning south');
        return 'south';
        }
      }
    }
  if(playerState.position[0] != gameEnvironment.ammoPosition[0][0]){
    return 'move';
  }
    /*if(playerState.position[1] > gameEnvironment.ammoPosition[0][1] 
      && playerState.position != 'west'){
      console.log('turning west');
      return 'west';
    }
    if(playerState.position[1] < gameEnvironment.ammoPosition[0][1]
      && playerState.position != 'east'){
      console.log('turning east');
      return 'east';
    // utils.turn;
    // return "south"
    // return "shoot"
    // return "move"
  }
};

module.exports = melk;
