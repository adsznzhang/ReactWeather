var React = require('react');

// we can use stateless function
// var About = React.createClass({
//     render: function() {
//         return(
//                 <h1>About Component</h1>
//         );
//     }
// });

var About = (props) => {
    return(
        <div>
        <h1 className="text-center page-title">About</h1>
        <p>Welcome to the about page</p>
            <p>
            </p>
            <ul>
            <li>
            <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
            </li>
            <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
            </li>
            </ul>
        </div>
    )
};

module.exports = About;
