import React from 'react';

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav ui fixed inverted menu">
      <div className="ui container">
        <Link className="header item" to="/">Algos and DS Visualization Tool</Link>
        <div className="ui simple dropdown item">
          Algorithms
            <i className="dropdown icon"></i>
          <div className="menu">
            <Link className="item" to="/patterns">Patterns</Link>
            <Link className="item" to="/sorts">Sorts</Link>
          </div>
        </div>
        <div className="ui simple dropdown item">
          Datastructures
            <i className="dropdown icon"></i>
          <div className="menu">
            <Link className="item" to="/linkedlists">Linked Lists</Link>
            <Link className="item" to="/stacksqueues">Stacks and Queues</Link>
            <Link className="item" to="/trees">Trees</Link>
            <Link className="item" to="/heaps">Binary Heaps</Link>
            <Link className="item" to="/hash">Hash Tables</Link>
            <Link className="item" to="/graphs">Graphs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;