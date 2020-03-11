import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloWithHooks from './components/HelloHooks';
import App from './App';
import './index.css';

const Router = () => {
    return(
    <div>
        <App/>
        <HelloWithHooks/>
    </div>
    )
}

render(<Router/>, document.getElementById('root'));