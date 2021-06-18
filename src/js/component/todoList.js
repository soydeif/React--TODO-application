import React, { useState } from "react";
import { Alert } from "bootstrap";

// necesito localizar el index de "result" para poder controlar la iteracion de las tareas
// una vez tenga cada key o index de ellas, necesito poder hacer un evento que me permita eliminar dicha tarea.
// he decidido crear un boton que general que me permita eliminar la primera tarea añadida del array pero no funciona ya que devuelve NaN - result.lengt-1
// he tratado con for pero no he tenido exito

export function TodoList() {
	const [task, setTask] = useState([
		{
			id: "1",
			name: " Go out for dinner"
		},
		{
			id: "2",
			name: " Check the boiler"
		}
	]);
	const [addList, setAddList] = useState([]);
	const result = task.map((item, index) => (
		<li key={index}>
			{item.name}
			<button
				onClick={e => {
					setTask(
						task.filter(
							singleTask =>
								singleTask.id !== e.target.dataset.taskId
						)
					);
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
					onChange={e => setAddList(e.target.value)} // indexa la tarea desde la caja de texto hasta la lista UL
					className="form-control"
					placeholder="Things to do"
					aria-label="Things to do"
					aria-describedby="button-addon2"></input>

				<div className="input-group-append">
					<button
						onClick={e => {
							//e.keyCode === "&#13" ||
							setTask([
								...task,
								{ id: Date.now().toString(), name: addList }
							]);
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
