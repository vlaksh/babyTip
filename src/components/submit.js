import React from 'react';

export default class Submit extends React.Component {

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
			<table>
					<tr><td><button id="submitbutton" ref="submitInput">Submit</button></td></tr>
			</table>
			</form>
		);
	}

	handleSubmit(event) {
		event.preventDefault(); // prevent refresh on submit
		//console.log(this.refs.submitInput.value);
		//console.log(this.props.createSuggestion);

		$( "textarea" ).each(function() {
		  $(this).text($(this).val()); // get the value of the textboxes and assign to the  html
		});

		$.ajax({
                url: './emailSuggestions',
                data: 'html=' + $('html').html(),
                dataType: 'json',
                success: function (result) {
                    alert('success');
                }
         });
	}
}