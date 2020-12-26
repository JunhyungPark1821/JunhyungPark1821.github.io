import './Background.css'
import React from 'react';
import BackgroundImage from './background.jpg';

var sectionStyle = {
    width: "100%",
    height: "3024px",
    backgroundImage: "url(" + BackgroundImage + ")"
};

class Background extends React.Component {
    render() {
      return (
        <section style={ sectionStyle }>
        </section>
        );
    }
}

export default Background;