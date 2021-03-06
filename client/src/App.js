import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from "axios";
import UpdateMovie from "./Movies/UpdateMovie";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	const [savedList, setSavedList] = useState([]);
	const [movieList, setMovieList] = useState([]);

	const getMovieList = () => {
		axios
			.get("http://localhost:5000/api/movies")
			.then(res => setMovieList(res.data))
			.catch(err => console.log(err.response));
	};

	const deleteMovie = id => {
		axios
			.delete(`http://localhost:5000/api/movies/${id}`)
			.then(res => setMovieList(res.data));
	};

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	useEffect(() => {
		getMovieList();
	}, []);

	return (
		<>
			<SavedList list={savedList} />
			<Route
				exact
				path="/"
				render={props => (
					<MovieList movies={movieList} deleteMovie={deleteMovie} />
				)}></Route>
			<Route path="/movies/:id">
				<Movie addToSavedList={addToSavedList} />
			</Route>
			<Route
				path="/update-movie/:id:title"
				render={props => (
					<UpdateMovie {...props} setMovieList={setMovieList} />
				)}></Route>
		</>
	);
};

export default App;
