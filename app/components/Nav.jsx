var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return(
            <div>
            <h2>Nav Component</h2>
            <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
            <Link to="/about" activeClassName="active">Get About</Link>
            <Link to="/example" activeClassName="active">Get Example</Link>
            </div>
    );
};

module.exports = Nav;
