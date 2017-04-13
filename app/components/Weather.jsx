var React = require('react');
var GetForm = require('GetForm');
var ShowText = require('ShowText');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false
        }
    },


    handleSearch: function (location) {
        var that = this;
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            alert(errorMessage);
            that.setState({isLoading: false});
        });
        // this.setState({
        //     location: location,
        //     temp: 23
        // });
    },
    render: function() {
        var {isLoading, temp, location} = this.state;

        // render something depending on their state
        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <ShowText location={location} temp={temp}/>;
            }
        }

        return (
                <div>
                <h3>Weather Component</h3>
                <GetForm onSearch={this.handleSearch}/>
                {renderMessage()}
                </div>
        );
    }
});


module.exports = Weather;
