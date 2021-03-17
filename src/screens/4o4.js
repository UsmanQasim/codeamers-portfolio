import React from 'react';
import '../components/styles/404.css';
import {Link} from 'react-router-dom';


// // <link href="https://fonts.googleapis.com/css?family=Montserrat:700,900" rel="stylesheet">
// <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
// <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>


const pageNotFound = () => (
    <div id="notfound">
        <div class="notfound">
            <div class="notfound-404">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
            <Link to='/'>Return To main page
            </Link>
        </div>
    </div>
)

export default pageNotFound;