import React from "react";
import { Link } from "react-router-dom";

const MovieCard = props => {
	const { id, title, director, metascore, stars } = props.movie;

	//why is this getting deleted only when refreshing page
	return (
		<div className="movie-card">
			<h2>{title}</h2>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>

			{/* {stars.map(star => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))} */}

			<Link to={`/update-movie/${id}?${stars}`}>
				<p>Update Movie</p>
			</Link>
			<button onClick={props.deleteMovie}>Delete</button>
		</div>
	);
};

export default MovieCard;
