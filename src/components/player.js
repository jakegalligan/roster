import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { showStats } from '../actions/index';

function Player({ match }) {
    const dispatch = useDispatch();
    let playerId = match.params.playerid;
    const roster = useSelector(state => state.players.roster );
    const showInfo = useSelector(state => state.showInfo);
    
    let specificplayer = roster.find(player => {
        return playerId == player.id
    });

    let handleClick= () => {
        dispatch(showStats());
    }
    console.log(specificplayer);


    return (
      <div>
          {specificplayer.name}

          <button onClick = {() => handleClick()}>Show Stats</button>
          {showInfo ? <h2>{specificplayer.stats}</h2>: '' }
      </div>
    )}
  
  export default Player;