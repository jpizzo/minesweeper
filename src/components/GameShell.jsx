import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clickSquare } from '../actions/clickSquare';
import { placeFlag } from '../actions/placeFlag';

class GameShell extends Component {
  componentWillMount() {
    this.props.clickSquare();
  }

  render() {
    const gameState = this.props.gameState
    return (
      <div>
        <div id="game-shell">
          <div id="inner0-game-shell">
            <div id="inner1-game-shell">
              <div id="stats-bar">
                <div id="left-stats-box">
                  <div id="inner-left-stats-box"></div>
                </div>
                <div id="mid-stats-box">
                  <div id="inner-mid-stats-box"></div>
                </div>
                <div id="right-stats-box">
                  <div id="inner-right-stats-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState.squares
})

GameShell.proptypes = {
  clickSquare: PropTypes.func.isRequired,
  placeFlag: PropTypes.func.isReuired
}

export default connect(mapStateToProps, { clickSquare, placeFlag })(GameShell);
