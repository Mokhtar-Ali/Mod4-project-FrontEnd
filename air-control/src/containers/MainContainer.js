import React from "react";
import '../Css/MainContainer.css'
import TreeContainer from "./TreeContainer";
import FirewoodContainer from "./FirewoodContainer";
import StatsContainer from "./StatsContainer";

class MainContainer extends React.Component {
  state = { 
    user: {},
    trees: [] }

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
      .then(response => response.json())
      .then(user => this.setState({ user: user, trees: user.trees}))
  }

  plantTree = () => {
    
    let data = {user_id: 1, atmosphere_id: 1, image: ' '}
    console.log('start fetching', data);
    fetch("http://localhost:3000/users/1" , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    })
    console.log('done fetching')
  }

  render() {
    // console.log(this.state.user);
    // console.log(this.state.trees);
    return (
      <div className="main-container">
        <StatsContainer user={this.state.user}/>
        <TreeContainer user={this.state.user} trees={this.state.trees} plantTree={this.plantTree}/>
        <FirewoodContainer />
      </div>
    );
  }

}

export default MainContainer;
