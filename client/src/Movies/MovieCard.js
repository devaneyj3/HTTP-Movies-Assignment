import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import UpdateMovie from "./UpdateMovie";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const MovieCard = props => {
	const { id, title, director, metascore, stars } = props.movie;
	let history = useHistory();

	const deleteMovie = () => {
		Axios.delete(`http://localhost:5000/api/movies/${id}`).then(res =>
			console.log(res.data)
		);
		history.push("/");
	};
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
			<button onClick={deleteMovie}>Delete</button>
		</div>
	);
};

export default MovieCard;
