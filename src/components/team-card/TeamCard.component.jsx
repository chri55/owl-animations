import React, { Component } from 'react';

import './TeamCard.styles.scss';

class TeamCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teamData: "",
    };
  }

  render() {
    const {
      name,
      index, 
    } = this.props;

    const {
      alt, 
      main,
    } = this.props.logo;

    const {
      primary, 
    } = this.props.colors;

    const nameLen = name.split(' ').length - 1;
    let city = name.split(' ').slice(0, nameLen).join(' ');
    let team = name.split(' ').slice(nameLen).join(' ');

    return (
      <div className="outer">
        <div 
          className="team-card"
          style={{
            backgroundColor: `${primary.color}`,
            animationDelay: `${0.05 * index}s`,
            animationDuration: '0.3s',
          }}>
          <img 
            src={
              (alt) ? 
                `${alt.svg}` : 
                `${main.svg}`
              }
            alt={`${name} Logo`}
          />
          <div className="name">
            <span
              style={{
                color: 'white',
              }}
            >{`${city}`}</span>
            <span
              className="teamname"
              style={{
                color: 'white',
              }}
            >{`${team}`}</span>
          </div>
        </div>
      </div>

    );
  }
}

export default TeamCard;