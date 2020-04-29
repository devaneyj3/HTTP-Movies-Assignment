import React, { useState } from "react";
import Axios from "axios";

const UpdateMovie = props => {
	const [data, setData] = useState({
		title: "",
		director: "",
		metascore: ""
	});
	//get actors out of search params and make an array
	const { search } = props.location;
	const actorsArr = search.substring(1, search.length).split(",");
	console.log(actorsArr);

	const pathId = props.match.params.id;

	const update = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const submit = e => {
		e.preventDefault();
		console.log(data);
		Axios.put(`http://localhost:5000/api/movies/${pathId}`, data)
			.then(res => console.log(res.data))
			.catch(err => console.error(err));
		props.history.push("/");
	};
	return (
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
				type="text"
				name="metascore"
				value={data.metascore}
				onChange={update}
				placeholder="New Metascore"
			/>
			{actorsArr.map(stars => {
				return (
					<input
						type="text"
						name="stars"
						value={stars}
						onChange={update}
						placeholder="New Stars"
					/>
				);
			})}
			<input type="submit" />
		</form>
	);
};

export default UpdateMovie;
