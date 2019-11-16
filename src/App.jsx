import React, { Component } from "react";
import Astronomy from './Astronomy.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			astronomy: []
		};
	}

	componentDidMount(){
		axios
		  .get('/apod')
			.then(response => response.data)
			.then(astronomy => this.setState({astronomy: astronomy}));
  }


  render () {
		const { astronomy } = this.state;
    return (
      <div className="container-fluid">
				<Astronomy data={astronomy}/>
			</div>
			);
		}
	}
	
	export default App;
