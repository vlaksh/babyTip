import _ from 'lodash';
import React from 'react';
import QuestionHeader from './question-header'
import QuestionListItem from './question-list-item.js'
import Submit from './submit.js'

export default class Question extends React.Component {
	renderItems() {
		return _.map(this.props.questions, (question, index) => <QuestionListItem key={index
			} {
				... question
			} />); 
			// creates a new array without mutating the array. For each todo, create a new todo Item. Index is a unique id
			/*
				... todo === (in ES6)
				task={todo.task}
				isCompleted={todo.isCompleted}
			*/
	}

	render() {
		return (
			<table>
				<QuestionHeader/>
				<tbody>
					{this.renderItems()}
				</tbody>
				<Submit/>
			</table>
		);
	}
}