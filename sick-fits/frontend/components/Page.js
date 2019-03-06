import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styles from 'styled-components';

const MyButton = styled.button`
	background: red;
	font-size: ${props => (props.huge ? '100px' : '50px')};
	.car {
		font: 100px;
	}
`;

class Page extends Component {
	render() {
		return (
			<div>
				<Meta />
				<Header />
				<MyButton>
					Click Me
					<span className='car'>car</span>
				</MyButton>
				{this.props.children}
			</div>
		)
	}
}

export default Page;