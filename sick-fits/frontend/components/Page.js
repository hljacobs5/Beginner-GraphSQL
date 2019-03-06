import Meta from '../components/Meta';
import styles from 'styled-components';

const StyledPage = styled.div`
	background: white;
	color: black;
`;

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	background: ${props => props.theme.red};
	margin: 0 auto;
	padding: 2rem;
`;

class Page extends Component {
	render() {
		return (
		  <ThemeProvider theme={theme}>
			<StyledPage>
				<Meta />
				<Header />
				<Inner>{this.props.children}</Inner>
			</StyledPage>
		  </ThemeProvider>
		);
	}
}

export default Page;