import React, { useState } from "react";
import axios from "axios";
import { Alert } from "reactstrap";

const UpdateMovie = props => {
	const [data, setData] = useState({
		id: "",
		title: "",
		director: "",
		metascore: "",
		stars: ""
	});
	const [message, setMessage] = useState("");
	const [updated, setUpdated] = useState(false);

	const update = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const { id } = props.match.params;
	const { title } = props.match.params;
	const submit = e => {
		e.preventDefault();
		//data.stars = 'Mark Wahlburg, Will Ferrel
		data.stars = data.stars.split(/,/g);
		//data.stars = ['Mark Wahlburg, "Will Ferrel"]
		data.metascore = parseInt(data.metascore);
		data.id = parseInt(id);
		axios
			.put(`http://localhost:5000/api/movies/${id}`, data)
			.then(res => {
				props.setMovieList(res.data);
				setMessage(
					"You Have Updated this title. It will take a few seconds to redirect."
				);
				setUpdated(true);
				setTimeout(() => {
					redirect();
				}, 3000);
			})
			.catch(err => {
				console.error(err);
				setMessage("There was an error updated this title. Try again");
				setUpdated(false);
			});
	};

	const redirect = () => {
		props.history.push("/");
	};
	return (
		<>
			{message ? (
				<Alert color={updated ? "success" : "danger"}>{message}</Alert>
			) : (
				<Alert color="info">You are editing for the movie: {title}</Alert>
			)}

			<form onSubmit={submit}>
				<input
					type="text"
					name="title"
					value={data.title}
					onChange={update}
					placeholder="New Title"
				/>
				<input
					type="text"
					name="director"
					value={data.director}
					onChange={update}
					placeholder="New Director"
				/>
				<input
					type="number"
					name="metascore"
					value={data.metascore}
					onChange={update}
					placeholder="New Metascore"
				/>
				<textarea
					name="stars"
					value={data.stars}
					onChange={update}
					placeholder="New Stars"
				/>
				<input type="submit" />
			</form>
		</>
	);
};

export default UpdateMovie;
