import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './hello.css';

export default () => {
    //constantes manejadas como states usando el hook useState para setear un valor default
    const [ count, setCount ] = useState(0); 
    const [ title ] = useState('Inicio');
    
    //Iniciando el ciclo componentDidMount con UseEffect
    useEffect(() => {
        document.title = title;
    }, []);

    useEffect(() => {
        if(count === 50) {
            setCount(0);
        }
    }, [count]);

    function handleCount() {
        setCount(count + 1);
    }

    function cleanCount() {
        setCount(0);
    }
    return (
        <div className = "body-hello" >
            <div className="aligment-buttons"><span className="inicial" > Hello world </span></div>
            <div className="aligment-buttons"><span className="inicial"> {count}</span></div>
            <div className="col-md-12 aligment-buttons">
                <span className="button-inc">
                <Button variant="primary" 
                        onClick={handleCount}>
                    Incrementar un numero
                </Button>
                </span>
                <Button variant="danger"
                        onClick={cleanCount}>
                    Limpiar Contador
                </Button>
            </div>
        </div> 
    )
}