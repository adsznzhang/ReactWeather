var axios = require('axios');


const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=12ac31ba04d63ce6cd3873e9d6c9cbd5';

// 12ac31ba04d63ce6cd3873e9d6c9cbd5



module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (response) {
            if (response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                if(response.data.name.toLowerCase() == location.toLowerCase()){
                    return response.data.main.temp;
                } else {
                    throw new Error('City not found');
                }
            }
        },function (err) {
            throw new Error(err.response.data.message);
        });
    //    return axios.get(requestUrl).then(function (res) {
    //         if (res.data.cdo && res.data.message) {
    //             throw new Error(res.data.message);
    //         }else {
    //             return res.data.main.temp;
    //         }
    //     }, function(res){
    //         throw new Error(res.data.message);
    //     });
    // }
    }
};
