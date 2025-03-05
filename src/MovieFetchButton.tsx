import React, { Component, useState } from 'react';

interface MovieFetchButtonProps {
    search: string;
    films: {title:string,id:string,description:string,actors:{id:string,fullName:string;}}[];
    setFilms:Function;
}

function MovieFetchButton(props: MovieFetchButtonProps) {
    return(
        <button className="fetchbutton" onClick={() => fetch('http://localhost:8080/films?title='+props.search)
            .then((response) => response.json())
            .then((data) => props.setFilms(data))}>
            Search
        </button>
        
    )
}

export default MovieFetchButton


// <button onClick={() => fetch('http://localhost:8080/films?title='+search)
//           .then((response) => response.json())
//           .then((data) => setFilms(data))}>Search2</button>