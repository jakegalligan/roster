import React from 'react';
import {useSelector} from 'react-redux';
import{ Link }from 'react-router-dom';



function Team() {
    const roster = useSelector(state => state.players.roster );
    console.log(roster);

    return (
      <div>
        {roster.map(player =>(
            <Link to={`/${player.id}`}>
                <h1> {player.name}</h1>
            </Link>
        ))}
      </div>
    )}
  
  export default Team;