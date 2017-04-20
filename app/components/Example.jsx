var React = require('react');
var {Link} = require('react-router');


var Example = (props) => {
    return(
            <div>
            <h3 className="text-center page-title">Example!</h3>
            <p>Here are a few example locations to try out:</p>
            <ol>
            <li>
            <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
            </li>
            <li>
            <Link to='/?location=Rio'>Rio, Brazil</Link>
            </li>
            </ol>
            </div>
    )
};

module.exports = Example;
