import React from 'react';
import TreeContainer from './TreeContainer'
import FirewoodContainer from './FirewoodContainer'
import StatsContainer from './StatsContainer'


function MainContainer() {
  return (
    <div className="main-container">
      <StatsContainer />
      <TreeContainer />
      <FirewoodContainer />

    </div>
  );
}

export default MainContainer;
