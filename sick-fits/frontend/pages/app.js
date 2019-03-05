import App, { Container } from 'next/app';

class MyApp extends App {
	render() {
		const { Component } = this.props;

		return (
			<Constainer>
				<Component />
			</Container>
		);
	}
}

export default MyApp;