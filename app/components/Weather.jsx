var React = require('react');
var GetForm = require('GetForm');
var ShowText = require('ShowText');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false
        }
    },


    handleSearch: function (location) {
        var that = this;
        this.setState({isLoading: true,
                       errorMessage: undefined,
                       location: undefined,
                       temp: undefined
                      });

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
            that.setState({isLoading: false,
                           errorMessage: e.message
                          });
        });
        // this.setState({
        //     location: location,
        //     temp: 23
        // });
    },
    componentDidMount: function () {
        var location = this.props.location.query.location;


        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function  (newProps) {
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;

        // render something depending on their state
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <ShowText location={location} temp={temp}/>;
            }
        }

        function renderError() {
if (typeof errorMessage === 'string') {
    return(
            <ErrorModal message={errorMessage}/>
    )
}
        }

        return (
                <div>
                <h3 className="text-center page-title">Weather Component</h3>
                <GetForm onSearch={this.handleSearch}/>
                {renderMessage()}
            {renderError()}
                </div>
        );
    }
});


module.exports = Weather;
