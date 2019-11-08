import React, { Component } from "react";
import Astronomy from './Astronomy.js';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			astronomy: []
		};
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