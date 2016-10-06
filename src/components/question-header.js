import React from 'react';

export default class QuestionHeader extends React.Component {
	render() {
		return (
				<thead>
					<tr>
						<td>Name</td>
						<td>					
							<textarea type="text" id="name" class="" placeholder="My name is..." />
						</td>
					</tr>
				</thead>
		);
	}
}