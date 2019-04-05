import { Mongo } from 'meteor/mongo';

const searchHistory = new Mongo.Collection('searchHistory');

export default searchHistory;