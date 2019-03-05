import React, { Component } from 'react';
import Header from '../components/Header';

class Page extends Component {
	render() {
		return (
			<div>
				<p>Hey I'm the page Component</p>
				{this.props.children}
			</div>
		)
	}
}

export default Page;