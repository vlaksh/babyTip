import React from 'react';
import Suggestion from './suggestion';


const suggestions = [
{
	suggestion : 'suggestion'
}
];

export default class QuestionListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: true,
			sindex:"suggest"+this.props.index,
			tindex:"text"+this.props.index
		};
	}

						//<button onClick={this.onSaveClick.bind(this, index)}>Save</button>

	renderActionSection(index){
		if(this.state.isEditing){
			return(
				<td>
						<Suggestion
							sindex={this.state.sindex}
							tindex={this.state.tindex}
						/>
				</td>
			);
		}

		return(
			<td>
						<button onClick={this.onEditClick.bind(this, index)}>Edit</button>
						<Suggestion
							sindex={this.props.sindex}
							tindex={this.state.tindex}
						/>
			</td>
		);

	}

	render() {
		return (
				<tr>
					<td>{this.props.question}</td>
					{this.renderActionSection(this.props.index)}
				</tr>
		);
	}

	onEditClick(index) {
			this.setState({ isEditing: true});
			$("#suggest"+index).css("display","block");//replaceWith(($("#suggest"+index)[0].value));
			$("#text"+index).css("display","none");
	}

	onSaveClick(index) {
			this.setState({ isEditing: false});
			$("#suggest"+index).css("display","none");//replaceWith(($("#suggest"+index)[0].value));
			$("#text"+index).text($("#suggest"+index)[0].value);
			$("#text"+index).css("display","block");
	}
}