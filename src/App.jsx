import { useState, useEffect } from "react";
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";

function App() {
	const [activity, setActivity] = useState("");
	const [todos, setTodos] = useState([]);
	const [editTodo, setEditTodo] = useState(null);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	const generateId = () => Date.now();

	function handleSubmit(e) {
		e.preventDefault();

		if (!activity.trim()) return;

		// if (editTodo) {
		// 	const updatedTodos = todos.map((todo) => {
		// 		if (todo.id === editTodo.id) {
		// 			return { ...todo, activity };
		// 		}
		// 		return todo;
		// 	});

		// 	setTodos(updatedTodos);
		// 	setActivity("");
		// 	setEditTodo(null);
		// 	return;
		// }

		const newTodo = { id: generateId(), activity, done: false };

		setTodos((prev) => {
			return editTodo
				? prev.map((todo) =>
						todo.id === editTodo.id ? { ...todo, activity } : todo
				  )
				: [...prev, newTodo];
		});
		setActivity("");
		setEditTodo(null);
	}

	function handleRemoveTodo(todoId) {
		const filteredTodo = todos.filter((todo) => todo.id !== todoId);
		setTodos(filteredTodo);
		setActivity("");
	}

	function handleEditTodo(todo) {
		setActivity(todo.activity);
		setEditTodo(todo);
	}

	function handleDoneTodo(todoId) {
		const updatedTodo = todos.map((todo) => {
			return todo.id === todoId ? { ...todo, done: !todo.done } : todo;
		});
		setTodos(updatedTodo);
	}

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem("todos")) || [];
		setTodos(saved);
	}, []);

	useEffect(() => {
		if (isFirstLoad) {
			setIsFirstLoad(false);
			return;
		}
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<main className="flex flex-col items-center min-h-screen p-6 text-gray-100 bg-linear-to-b from-slate-600 to-slate-800">
			<div className="flex flex-col w-full max-w-2xl gap-6 p-6 bg-gray-800 rounded-lg shadow-lg">
				<h1 className="text-3xl font-bold text-center text-white capitalize">
					simple todo list
				</h1>
				<FormInput
					value={activity}
					setActivity={setActivity}
					editTodo={editTodo}
					handleSubmit={handleSubmit}
				/>

				<TodoList
					todos={todos}
					handleDoneTodo={handleDoneTodo}
					handleEditTodo={handleEditTodo}
					handleRemoveTodo={handleRemoveTodo}
				/>
			</div>
		</main>
	);
}

export default App;
