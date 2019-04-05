import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div className="home-hero">
            <h1>Welcome! Please sign up or login to continue.</h1>
            <Link to="/signup">
                <button type="button" className="btn btn-raised btn-primary">Sign up</button>
            </Link>
            <span className="mr-2 ml-2">or</span>
            <Link to="/login">
                <button type="button" className="btn btn-raised btn-success">Log in</button>
            </Link>
        </div>
    </div>
);

export default Home;