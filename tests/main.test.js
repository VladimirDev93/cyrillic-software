import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Accounts } from 'meteor/accounts-base';
import assert from 'assert';

describe('OpenWeather requests', () => {
  it('should return 200 OK', async () => {
    let res = await HTTP.get('https://api.openweathermap.org');
    let code = await res.statusCode;
    assert.deepEqual(code, 200);
  });

  it('should return city data for London', async () => {
    let res = await HTTP.get(`https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${Meteor.settings.private.OpenWeatherMap.apiKey}`);
    let json = await res.data;
    assert.deepEqual('London', json.name);
  });
});

describe('Account management', () => {
  it('should register the user', async () => {
    let create = await Accounts.createUser({
      username: 'Lorem',
      password: 'ipsum'
    });
    let id = await create;
    assert.deepEqual(id.length, 17);
    
    // Delete the dummy user afterwards
    Meteor.users.remove({ _id: id });
  });
});