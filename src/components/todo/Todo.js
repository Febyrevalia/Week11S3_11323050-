import './Todo.css'
import {useState} from 'react'
import TodoCreate from '../todo-create/TodoCreate'
import TodoList from '../todo-list/TodoList'

const Todo = () => {
	const [getTodos, setTodos] = useState([
		{
			id: 1, title:'Jangan Malas'
		},
		{
			id: 2, title:'Pergunakan waktu semaksimal mungkin'
		},
		{
			id: 3, title:'Jangan tunda-tunda waktu'
		}
	])
	const eventCreateTodo = (todo) => {
		setTodos(getTodos.concat(todo))
		//console.log('tambah')
	}
	return(
		<div>
			<TodoCreate onCreateTodo={eventCreateTodo}/>
			<TodoList dataTodos={getTodos}/>
		</div>
	)
}

export default Todo