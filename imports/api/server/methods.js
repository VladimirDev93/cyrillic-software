import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { check } from 'meteor/check';
import searchHistory from '/lib/collections';

// I usually create methods with ValidatedMethod and SimpleSchema
// and then add them to the DDP rate limiter, but since there is only one
// method, that would just add uneccessary weight to the code and therefore
// it is not needed.

Meteor.methods({
    'getWeatherData': async (query) => {
        check(query, String);
        // Why is 'this.userId' undefined !?

        // Add the search query to the search history collection
        searchHistory.upsert({
            _id: Meteor.userId()
        }, {
            $push: {
                'queries': query
            }
        });
        
        // GET weather data for city query
        try {
            let res = await HTTP.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${Meteor.settings.private.OpenWeatherMap.apiKey}`)
            let json = await res.data;
            return json;
        } catch (error) {
            return new Meteor.Error(error);
        }
    }
});