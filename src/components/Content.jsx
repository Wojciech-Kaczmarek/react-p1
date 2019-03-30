import React from 'react';
import { Link } from 'react-router-dom'; 

const Content = () => (
    <div>
        <h1>Content</h1>
        <Link
            className="/App-Link"
            to="/"
        >
        back dash
        </Link>
    </div>
);

export default Content;