import { Meteor } from 'meteor/meteor';
import searchHistory from '/lib/collections';

Meteor.publish('searchHistory', () => {
    return searchHistory.find({});
});