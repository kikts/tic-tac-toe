import React from 'react'
import Board from './Board'

class Game extends React.Component {

	render() {

		return (
			<div className="game">
				<div className="game-board">	
					<div className="title">TIC TAC TOE IN REACT</div>
					<Board />
				</div>	
				<div className="game-info"></div>
			</div>
		)
	}
}

export default Game;
