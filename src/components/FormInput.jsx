import React from "react";

export default function FormInput(props) {
	const { value, setActivity, editTodo, handleSubmit } = props;
	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center gap-2 p-4 bg-white rounded shadow-md"
		>
			<input
				type="text"
				placeholder="Set Activity..."
				value={value}
				onChange={(e) => setActivity(e.target.value)}
				className="flex-1 px-4 py-2 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
			/>
			<button
				type="submit"
				className="px-3 py-2 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				{editTodo ? "Save" : "Add "}
			</button>
		</form>
	);
}
