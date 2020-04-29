import React, { useState } from "react";
import axios from "axios";

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
	const submit = (e, props) => {
		e.preventDefault();
		data.stars = data.stars.split(/,/g);
		data.metascore = parseInt(data.metascore);
		data.id = parseInt(id);
		console.log(data);
		axios
			.put(`http://localhost:5000/api/movies/${id}`, data)
			.then(res => {
				console.log(res.data);
				setMessage("You Have Updated this title");
				setUpdated(true);
			})
			.catch(err => {
				console.error(err);
				setMessage("There was an error updated this title. Try again");
				setUpdated(false);
			});
	};
	return (
		<>
			{message ? <p>{message}</p> : null}
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
