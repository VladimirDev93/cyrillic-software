import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

class Register extends Component {
    handleAccount(e) {
        e.preventDefault();

        // Get the values;
        let form = e.currentTarget;
        let username = form.user.value;
        let password = form.password.value;

        // Create account
        Accounts.createUser({
            username,
            password
        }, (err) => {
            if (!err) {
                location.href = '/';
            } else {
                alert(err.reasong);
            }
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-5 col-8">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.handleAccount}>
                                    <div className="row form-group">
                                        <div className="col-12">
                                            <label htmlFor="user">Username</label>
                                        </div>
                                        <div className="col-12">
                                            <input className="form-control" type="text" name="user" id="user" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-12">
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="col-12">
                                            <input className="form-control" type="password" name="password" id="password" />
                                        </div>
                                    </div>
                                    <div className="row form-group justify-content-around">
                                        <button className="btn btn-raised btn-primary" type="submit">Sign up</button>
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

export default Register;