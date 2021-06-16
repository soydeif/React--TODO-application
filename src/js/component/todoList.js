import React, { useState } from "react";
/*
export function TodoList() {
	const [inputValue, setInputValue] = useState("");
	const [addList, setAddList] = useState([]);

	//const listItems = todos.map((item, index) => <li key={index}>{item}</li>);

	return (
		
	);
}*/
export function TodoList() {
	const [array, setArray] = useState([]);
	const [addList, setAddList] = useState("");
	const result = array.map((item, index) => <li key={index}>{item}</li>);

	return (
		<div className="input-group mb-3">
			<input
				type="text"
				onChange={e => setAddList(e.target.value)}
				className="form-control"
				placeholder="Things to do"
				aria-label="Things to do"
				aria-describedby="button-addon2"></input>

			<div className="input-group-append">
				<button
					onClick={e => {
						setArray([...array, addList]);
					}}
					className="btn btn-outline-secondary"
					type="button"
					id="button-addon2">
					Add to the List
				</button>
				<ul>{result}</ul>
			</div>
		</div>
	);
}
