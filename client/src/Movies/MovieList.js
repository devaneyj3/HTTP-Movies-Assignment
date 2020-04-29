import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList(props) {
	return (
		<div className="movie-list">
			{props.movies.map(movie => (
				<MovieCard movie={movie} setMovies={props.setMovies} />
			))}
		</div>
	);
}

export default MovieList;
