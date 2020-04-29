import React, { useState } from "react";
import Axios from "axios";
import {
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from "reactstrap";

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
			.then(res => props.setMovieList(res.data))
			.catch(err => console.error(err));
		props.history.push("/");
	};
	return (
		<>
			<Form onClick={submit}>
				<FormGroup row>
					<Label for="title" sm={2}>
						Title
					</Label>
					<Col sm={10}>
						<Input
							type="text"
							name="title"
							value={data.title}
							onChange={update}
							placeholder="New Title"
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="director" sm={2}>
						Director
					</Label>
					<Col sm={10}>
						<Input
							ttype="text"
							name="director"
							value={data.director}
							onChange={update}
							placeholder="New Director"
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="metascore" sm={2}>
						Metascore
					</Label>
					<Col sm={10}>
						<Input
							type="text"
							name="metascore"
							value={data.metascore}
							onChange={update}
							placeholder="New Metascore"
						/>
					</Col>
				</FormGroup>
				{actorsArr.map(stars => {
					return (
						<FormGroup row>
							<Label for="stars" sm={2}>
								Stars
							</Label>
							<Col sm={10}>
								<Input
									type="text"
									name="stars"
									value={stars}
									onChange={update}
									placeholder="New Stars"
								/>
							</Col>
						</FormGroup>
					);
				})}
			</Form>
			<Button color="success" type="submit">
				Update Movie info
			</Button>
		</>
	);
};

export default UpdateMovie;
