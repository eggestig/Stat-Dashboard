import React, { useState, useEffect } from 'react' 
import TodoList from './TodoList'
import Sidebar from './SidebarApp/Sidebar'
import { v4 as uuidv4 } from 'uuid'
const sidebarElements = require('./SidebarApp/SidebarContent.json').sidebarElements

/** 
 * 
 * Todos [Ignore]
 * 
*/
/*
const todoNameRef       = React.createRef();
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function useEffectsTodos(todos, setTodos) {
	useEffect(() => {
		console.log("useEffect(Todos) - []");
		const storedTodosRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
		if(storedTodosRaw) setTodos(JSON.parse(storedTodosRaw))
	}, []);

	useEffect(() => {
		console.log("useEffect(Todos) - [Todos]");
		if(todos) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);
}

function toggleTodo(id, todos, setTodos) {
	const newTodos = [...todos];
	const todo     = newTodos.find(todo => todo.id === id)
	todo.complete  = !todo.complete
	setTodos(newTodos)
}

function handleAddTodo(setTodos) {
	const name = todoNameRef.current.value;
	if (name === '') return
	setTodos(prevTodos => {
		return [...prevTodos, { id: uuidv4(), name: name, complete: false}];
	})
	todoNameRef.current.value = null;
}

function handleClearTodos(todos, setTodos) {
	const newTodos = todos.filter(todo => !todo.complete)
	setTodos(newTodos);
}
*/

/** 
 * 
 * Sidebar
 * 
*/

function toggleSidebarElem(id, sidebar, setSidebar) {
	const tempSidebar = [...sidebar]; //Copy

	if(tempSidebar.find(elem => elem.id === id).expanded !== null) {
		tempSidebar.find(elem => elem.id === id).expanded = !tempSidebar.find(elem => elem.id === id).expanded //Switch between expanded/not expanded
	}

	if(sidebar.find(elem => elem.selected).id !== sidebar.find(elem => elem.id === id).id) {
		tempSidebar.find(elem => elem.selected).selected  = false; //Deselect old element
		tempSidebar.find(elem => elem.id === id).selected = true;  //Select new element
	}

	return setSidebar(tempSidebar)
}

function App() {

	//Todos
	/* [Ignore]
	const [todos, setTodos] = useState([]);
	useEffectsTodos(todos, setTodos);
	*/

	//Sidebar
	console.log(sidebarElements);
	const [sidebar, setSidebar] = useState(sidebarElements);

	return (
		<>
			<div className="sidebarApp">
				<Sidebar elems={sidebarElements} toggleElem={(id) => {return toggleSidebarElem(id, sidebar, setSidebar)}}/>
			</div>
		</>
	);

	/* [Ignore]
	<div className="todoListApp">
				<TodoList todos={todos} toggleTodo={(id) => {return toggleTodo(id, todos, setTodos)}}/>
				<input ref={todoNameRef} type="text" />
				<button onClick={() => handleAddTodo(setTodos)}>Add</button>
				<button onClick={() => handleClearTodos(todos, setTodos)}>Clear Complted Todos</button>
				<div>{todos.filter(todo => !todo.complete).length} left to do</div>
			</div>
	*/
}

export default App;
