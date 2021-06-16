import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TodoList } from "./todoList";

//create your first component
export function Home() {
	return (
		<>
			<div className="Logo">
				<p>TODO LIST</p>
			</div>
			<div id="container">
				<TodoList />
			</div>
		</>
	);
}
