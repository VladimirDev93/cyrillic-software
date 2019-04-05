import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import searchHistory from '../../../lib/collections';

class SearchHistory extends TrackerReact(Component) {
    state = {
        subscription: Meteor.subscribe('searchHistory')
    }
    queries() {
        let doc = searchHistory.findOne({ _id: Meteor.userId() });
        if (doc !== undefined) {
            let list = doc.queries.map((values, index) => {
                return <li className="list-group-item" key={index}>{values}</li>
            });
            return list;
        }

    }
    handleClear() {
        searchHistory.remove({ _id: Meteor.userId() });
    }
    handleLogout() {
        Meteor.logout();
        window.location.href = '/';
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {this.queries()}
                    </ul>
                    <div className="row">
                        <button type="button" onClick={this.handleClear} className="btn btn-raised btn-danger">Clear history</button>
                        <button type="button" onClick={this.handleLogout} className="btn btn-raised btn-secondary">Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchHistory;