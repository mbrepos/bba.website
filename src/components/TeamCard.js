import React, { Component } from "react";
import "../styles/teamcard.css";
import { SocialIcon } from "react-social-icons";
import TeamCardModal from "./TeamCardModal";

export default class TeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  render() {
    return (
      <div>
          <div className="circle" style={{cursor: "pointer"}}></div>
          <SocialIcon
            url={this.props.linkden}
            target="_new"
            bgColor="white"
            fgColor="#0a61b8"
            className="linkden"
          />
        {/* <div
          className="team-card-container"
          onClick={() => this.setState({ showModal: true })}
        > */}

          <div className="team-card-individual">
            <img className="team-card-photo" src={this.props.icon} alt="icon" />
            <h3>{this.props.name}</h3>
            <p>{this.props.title}</p>
            <p>{this.props.description}</p>
          </div>
        {/* </div> */}
        <TeamCardModal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
          name={this.props.name}
          title={this.props.title}
        />
      </div>
    );
  }
}
