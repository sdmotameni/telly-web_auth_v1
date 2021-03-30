import ProfileService from "../services/profileService";
import Profile from "../components/profile";
import Loading from "../components/loading";
import Welcome from "../components/welcome";

import React, { Component } from "react";

export default class id extends Component {
  state = { component: <Loading /> };

  componentDidMount() {
    const id = window.location.pathname.substring(1);
    ProfileService.getProfile(id)
      .then(({ data }) => {
        this.setState({ component: <Profile data={data} /> });
      })
      .catch((_) => {
        this.setState({ component: <Welcome /> });
      });
  }

  render() {
    return this.state.component;
  }
}
