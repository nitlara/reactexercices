import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


// here you have declare your Alert component and return
 const Alert = props => {
	return (
		<div className="alert alert-danger" role="alert">
		    {props.text}
		</div>
	);
};
 //the html that bootstrap dictates for its alert component
Alert.propTypes = {
	text: PropType.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(<Alert text="OMG! Something really bad has happended!" />, document.querySelector("#myDiv"));
