import { EventEmitter } from "events";

// import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor(){
		super()
		this.todos = [
			{
				id: 2289385039,
				text: "Go Water",
				complete: false
			},
			{
				id: 3536748290,
				text: "Go Pub!",
				complete: false
			},
		];
	}

	createTodo(text){
		const id = Date.now();

		this.todos.push({
			id,
			text,
			complete: false,
		});

		this.emit("change");
	}

	getAll(){
		return this.todos;
	}

	handleActions(action){
		switch(action.type){
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
			case "RECEIVE_TODOS": {
				this.todos = action.todos;
				this.emit("change");
			}
		}
		console.log('TodoStore received an action' , action);
	}

}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;
export default todoStore;