import React from 'react';

export default class Suggestion extends React.Component {
	render() {
		return (
					<textarea type="text" id={this.props.sindex} class="suggestions" placeholder="My suggestion is..." />
		);
	}
}