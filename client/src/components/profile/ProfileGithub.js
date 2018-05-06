import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "26c196bacea7db10cf48",
      clientSecret: "0885cb690e07d2a93a6afb0891fb552fd9f7aa53",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div className="card">
        <div key={repo.id} className="card-content">
          <div className="row">
            <div className="col m6">
              <h4>
                <Link
                  to={repo.html_url}
                  className="blue-text text-darken-2"
                  target="_blank"
                >
                  {repo.name}
                </Link>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div className="col-md-6">
              <span className="new badge red">
                Stars: {repo.stargazers_count}
              </span>
              <span className="new badge blue">
                Watchers: {repo.watchers_count}
              </span>
              <span className="new badge green">Forks: {repo.forks_count}</span>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
