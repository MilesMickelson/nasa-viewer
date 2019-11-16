import React from "react";

const Astronomy = (props) => {

	const { title, url, hdurl, explanation, date, copyright } = props.data; 

	return (
		<div className="col-12">
			<div className="row header-row">
				<div className="col-12">
				  <div className="header-wrap">
						<div className="nasa-logo-wrapper">
					    <img className="nasa-logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"></img>
						</div>
						<div className="main-title-wrapper">
					    <div className="main-title">NASA</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
        <div className="col-12">
				  <div className="sub-title">Astronomical Images & Information</div>
			    <hr></hr>
					<div className="titles">
					<h3 className="astronomy-title">Astronomy Picture of the day -&ensp;</h3>
					<h3 className="apod-title"> {title} by {copyright}, {date}</h3>
					<div className="p-wrapper">
			      <p className="explanation">{explanation}</p>
					</div>
					</div>
				</div>
			</div>
			<div className="row">
        <div className="col-12">
			    <a href={hdurl} className="astronomy-image-wrapper">
			    <img src={url} alt={title} className="nasa-apod"/>
			    </a>
					<br />
				</div>
			</div>
		</div>
	)
}

export default Astronomy;
