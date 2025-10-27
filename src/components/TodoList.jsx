import React from "react";

export default function TodoList(props) {
	const { todos, handleEditTodo, handleRemoveTodo, handleDoneTodo } = props;
	return (
		<ul className="h-full space-y-4 min-h-96">
			{todos.length === 0 ? (
				<div className="flex items-center justify-center">
					<p className="text-lg text-gray-400">
						No todos yet - start by adding one!
					</p>
				</div>
			) : (
				todos.map((todo) => {
					return (
						<li
							key={todo.id}
							className="flex items-center justify-between gap-3 p-4 bg-white rounded shadow-md"
						>
							<input
								type="checkbox"
								checked={todo.done}
								onChange={() => handleDoneTodo(todo.id)}
								className="w-5 h-5 cursor-pointer accent-green-500"
							/>
							<p
								className={`flex-1 capitalize ${
									todo.done
										? "line-through text-gray-400"
										: "text-gray-800"
								}`}
							>
								{todo.activity}
							</p>
							<div className="flex gap-2">
								<button
									onClick={() => handleEditTodo(todo)}
									className="px-3 py-1 text-white bg-yellow-500 rounded cursor-pointer hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								>
									Edit
								</button>
								<button
									onClick={() => handleRemoveTodo(todo.id)}
									className="px-3 py-1 text-white bg-red-500 rounded cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
								>
									Delete
								</button>
							</div>
						</li>
					);
				})
			)}
		</ul>
	);
}
