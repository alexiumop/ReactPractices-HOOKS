import React, { useState, useEffect } from 'react';
import './search.css';
import { Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { AppBar, Typography, Toolbar, IconButton, Menu } from '@material-ui/core';

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
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=WH4gqMoUpIqyJBB50NeJUn7e42sT4a0V&q=${query}&limit=20&offset=0&rating=G&lang=en`);
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
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Busca tu GHIPY
                    </Typography>
                </Toolbar>
            </AppBar>
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
                    {loading ? <div className="alignment-search">
                                <Loader 
                                    type="Plane" 
                                    color="#ffffff" 
                                    height={180} 
                                    width={180}
                                />
                                </div> :
                        results.map((item) => (
                            <video 
                                autoPlay 
                                key={item} 
                                loop src={item} 
                                width="100" 
                                height="100" 
                                className="thumb"
                            />
                        ))}
                </div>
            </div>
        </React.Fragment>
    )
 }