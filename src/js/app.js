// utilities
import React from 'react'
import { render } from 'react-dom'

// components
import Hello from './components/hello'

// app
class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: 'React mini boilerplate',
			imgUrl: 'assets/images/react.svg',
			timeOut: 10000
		}
	}

	componentDidMount() {
		this.changeName('Oh sh!t React is nice!')
	}

	changeName(name) {
		setTimeout(e => {
			this.setState({ name })
		}, this.state.timeOut)
	}

	render() {
		const style = {
			width: '111px',
		}

		return (
			<div className='container'>
				<div className='content'>
					<img style={ style } src={ this.state.imgUrl }/>
					<Hello name={ this.state.name }/>
				</div>
			</div>
		)
	}
}

render(<App />, document.querySelector('#root'))
