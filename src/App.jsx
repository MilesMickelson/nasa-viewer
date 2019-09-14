import React, { Component } from "react";
import Astronomy from './Astronomy.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			astronomy: []
		};
		}
		
		componentDidMount() {
			const API_KEY = 'qafoGqt1KRljD5jsHUtJxhrixpVzap5kTooSLcSB';
			const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';
			
			axios.get(END_POINT+API_KEY)

			  .then(response => {

          this.setState({
						astronomy: response.data
					})
					console.log(this.state.astronomy)
				})

				.catch(error => {
					console.log(error, 'failed to fetch data')
				});
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