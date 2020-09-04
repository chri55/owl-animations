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
    const {altDark, alt, main} = this.props.logo;
    return (
      <div className="outer">
        <div 
          className="team-card"
          style={{
            backgroundColor: `${this.props.colors.primary.color}`,
            color: `{this.props.colors.secondary.color}`,
            animationDelay: `${0.05 * this.props.index}s`,
            animationDuration: '0.3s',

          }}>
          <img 
            src={
              (alt) ? 
                `${this.props.logo.alt.svg}` : 
                //((alt) ? 
                //`${this.props.logo.altDark.svg}` : 
                `${this.props.logo.main.svg}`
                //)
              }
            alt={`${this.props.name} Logo`}
          />
          <div className="name">
            <span
              style={{
                //color: `${this.props.colors.tertiary.color}`
                color: 'white',
              }}
            >{`${this.props.name.split(' ').slice(0, this.props.name.split(' ').length-1).join(' ')}`}</span>
            <span
              className="teamname"
              style={{
                //color: `${this.props.colors.tertiary.color}`
                color: 'white',
              }}
            >{`${this.props.name.split(' ').slice(this.props.name.split(' ').length -1)}`}</span>
          </div>
          
        </div>
      </div>

    );
  }
}

export default TeamCard;