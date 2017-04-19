var React = require('react');

var ShowText = (props) => {
    var {temp, location} =props;
    return(
            <h1 className="text-center">Its about {temp} degree in {location}!</h1>
    );
};

module.exports = ShowText;
