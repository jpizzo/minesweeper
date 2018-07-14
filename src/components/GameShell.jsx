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
        <div id="game-shell"></div>
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
