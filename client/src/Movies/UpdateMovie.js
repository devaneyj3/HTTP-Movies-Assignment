import React, { useState } from "react";

const UpdateMovie = () => {
	const [data, setData] = useState({
		title: "",
		director: "",
		metascore: "",
		stars: ""
	});

	const update = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const submit = e => {
		e.preventDefault();
		console.log(data);
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
			<input
				type="text"
				name="stars"
				value={data.stars}
				onChange={update}
				placeholder="New Stars"
			/>
			<input type="submit" />
		</form>
	);
};

export default UpdateMovie;
