import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Login extends Component {
    handleSubmit(e) {
        e.preventDefault();

        // Get the values
        let form = e.currentTarget;
        let username = form.username.value;
        let password = form.password.value;

        // Log in
        Meteor.loginWithPassword(username, password, (err) => {
            if (!err) {
                location.href = '/';
            } else {
                alert(err.reason);
            }
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6 col-8">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="username" className="bmd-label-floating">Username</label>
                                        <input type="text" className="form-control" id="username" name="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="bmd-label-floating">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" />
                                    </div>
                                    <div className="row form-group justify-content-around">
                                        <button type="submit" className="btn btn-raised btn-primary">Submit</button>
                                        <Link to="/" className="btn btn-raised btn-secondary">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;