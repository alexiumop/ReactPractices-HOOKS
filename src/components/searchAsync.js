import React, { useState, useEffect } from 'react';
import './search.css';
import { Button } from 'react-bootstrap';

export default () => {

const [search, setSearch] = useState('');
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);

useEffect( () => {
    document.title = 'Busqueda Async'
    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=WH4gqMoUpIqyJBB50NeJUn7e42sT4a0V&q=${query}&limit=10&offset=0&rating=G&lang=en`);
            const json = await response.json();
            setResults(
                json.data.map(item => {
                    return item.images.preview.mp4
                })
            );
        } 
         finally {
            setLoading(false);
        }  
    }
    if(query !== '') {
        fetchData();
    }
}, [query]);

    return (
        <React.Fragment>
            <div className="alignment-search">
                <form onSubmit={e => {
                    e.preventDefault()
                    setQuery(search)
                }}>
                    <input
                        value={search} 
                        className="margin-items input-styling"
                        onChange={e => { setSearch(e.target.value); }}
                        placeholder="busca lo que quieras"
                    />
                    <Button type="submit" 
                            className="margin-items"
                            variant="success">
                        Buscar
                </Button>
                    <Button variant="danger"
                        onClick={e => {
                            setSearch('');
                            setResults([]);
                            setQuery('');
                        }}>
                        Limpiar busqueda
                </Button>
                </form>
            </div>
            <div className="panel panel-success">
                <div className="panel-body">
                    {loading ? <h1>Cargando...</h1> :
                        results.map((item) => (
                            <video autoPlay key={item} loop src={item} />
                        ))}
                </div>
            </div>
        </React.Fragment>
    )
 }