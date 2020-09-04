import React, { Component } from 'react';
import TeamCard from '../team-card/TeamCard.component';

import './TeamList.styles.scss';


class TeamList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: null,
    };
  }

  componentDidMount() {
    fetch('https://api.overwatchleague.com/v2/teams')
    //.then(res =>  console.log(res))
    .then(response => response.json())
    .then(data => this.setState({teams: data.data}), () => console.log(this.state));
  }

  render() {
    const { teams } = this.state;
    return (
      <div className="team-list">
        {(teams) && teams.map((team, index) => (
          <TeamCard index={index} {...team}></TeamCard>
        ))}
      </div>
    );
  }
}

export default TeamList;