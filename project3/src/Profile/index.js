import React, { Component } from 'react';


class Profile extends Component {
  constructor() {
    super()

    this.state = {
      galleryShowing: false
    }
  }
  render() {

    return(
      <div>
        <div>Photographer name goes here</div>
        <div>Photo goes here</div>
        <div>Photographer Info goes here</div>
        <div>Album list goes here</div>
      </div>
    )
  }
}

export default Profile
