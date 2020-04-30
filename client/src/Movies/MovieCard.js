import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const MovieCard = props => {
	const { id, title, director, metascore, stars } = props.movie;

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

			{stars.map(star => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))}

			<Link to={`/update-movie/${id}${title}`}>
				<Button color="primary">Update Movie</Button>
			</Link>
			<br></br>
			<br></br>
			<Button color="danger" onClick={props.deleteMovie}>
				Delete
			</Button>
		</div>
	);
};

export default MovieCard;
