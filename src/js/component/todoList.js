import React, { useState, useEffect } from "react";
import { Alert } from "bootstrap";

// añadir tareas tanto con click como enter -* search google event onKeyPress *-
// lograr que la barra elimine la ultima tarea del placeholder.

export function TodoList() {
	const [task, setTask] = useState([]);
	const [addList, setAddList] = useState("");

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/soydeif")
			.then(response => response.json())
			.then(data => setTask(data));
	}, []);
	useEffect(() => {
		update();
		console.log("HERE");
	}, [task]);

	const update = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/soydeif", {
			method: "PUT",
			body: JSON.stringify(task), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.catch(error => console.error("Error:", error))
			.then(response => console.log("Success:", response));
	};

	const result = task.map((item, index) => (
		<li key={index}>
			{item.label}
			<button
				onClick={e => {
					setTask(task.filter((singleTask, i) => i !== index));
				}}
				className="btn btn-outline-secondary"
				data-task-id={item.id}
				type="button"
				id="button-addon2">
				<div className="equis">X</div>
			</button>
		</li>
	));
	//e.keyCode === "&#13" ||
	return (
		<>
			<div className="input-group mb-3">
				<input
					type="text"
					value={addList}
					onChange={e => setAddList(e.target.value)} // indexa la tarea desde la caja de texto hasta la lista UL
					className="form-control"
					placeholder="Things to do"
					aria-label="Things to do"
					aria-describedby="button-addon2"></input>

				<div className="input-group-append">
					<button
						onClick={e => {
							setTask([...task, { label: addList, done: false }]); //actualiza el valor de task con un array,(hay corchetes, obviamente) // se añade al array addList el label y el done que vienen del nuevo array

							setAddList("");
						}}
						className="btn btn-outline-secondary"
						type="button"
						id="button-addon2">
						Add to the List
					</button>
				</div>
			</div>
			<ul>{result}</ul>
		</>
	);
}
