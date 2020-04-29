import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
	return (
		<div className="movie-list">
			{props.movies.map(movie => (
				<MovieCard
					key={movie.id}
					movie={movie}
					deleteMovie={() => props.deleteMovie(movie.id)}
				/>
			))}
		</div>
	);
}

export default MovieList;
