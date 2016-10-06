import React from 'react';
import Question from './question'
import {Link} from 'react-router'

const questions = [
{
	question : 'What do to when baby refuses to burp?',
	index : 0
},
{
	question : 'How to tickle the baby?',
	index: 1
}
];


export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			questions
		}
	}
	render() {
		return (
			<div>
				<h1>Baby Tips please!</h1>
				<Question 
					questions={this.state.questions}
					index={this.state.index}
				/>

				<Link to="/viewSuggestions">
				<div class="boxes">
                    <button>View suggestions</button>
                </div>
                </Link>

			</div>
		);
	}
}