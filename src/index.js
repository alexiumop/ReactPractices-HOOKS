import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/searchAsync'
import './index.css';

const Router = () => {
    return(
    <div>
        <Search/>
    </div>
    )
}

render(<Router/>, document.getElementById('root'));