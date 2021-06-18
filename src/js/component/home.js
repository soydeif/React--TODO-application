import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TodoList } from "./todoList";

//create your first component
export function Home() {
	return (
		<>
			<div id="container">
				<div className="Logo">
					<p>TODO LIST</p>
				</div>

				<TodoList />
			</div>
		</>
	);
}
