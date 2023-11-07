import { Button, Container, Form, ListGroup } from "react-bootstrap";
import './Main';
import { useState } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";

/* const TODOS = [
    {
        text: 'Instalar NodeJS',
        status: false,
        id: 1,
    },
    {
        text: 'Crear proyecto con vite@latest',
        status: true,
        id: 2,
    },
    {
        text: 'Hacer un npm install de las dependencias',
        status: false,
        id: 3,
    }
]; */
const TODOS = JSON.parse(localStorage.getItem('todos')) || [];

function Main () {
    const [ todos, setTodos ] = useState(TODOS);

    function updateLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const input = event.target.elements.text;
        const text = input.value;
        const todo = {
            text,
            status: false,
            id: crypto.randomUUID()    
        } 
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        input.value= '';
        input.focus();
        updateLocalStorage();
    }

    function handleTodoDelete(id) {
        const newArray = todos.filter(todo => todo.id != id);
        setTodos(newArray);
        updateLocalStorage();
    }

    function handleTodoStatus(id) {
        const todo = todos.find(todo => todo.id == id);
        todo.status = true;
        setTodos([...todos]);
        updateLocalStorage();
    }

    return (
        <Container fluid="md" className="flex-grow-1">
            <main>
                <h1 className="p-3 border-bottom border-primary">TODO List</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 todo-input" controlId="formBasicEmail">
                        <Form.Label>Tarea</Form.Label>
                        <div className="d-flex gap-2">
                            <Form.Control name="text" type="text" placeholder="Ingrese tarea a realizar" />
                            <Button variant="primary" type="submit">
                                Agregar
                            </Button>
                        </div>
                    </Form.Group>
                </Form>

                <h2>Tareas</h2>
                <ListGroup as="ol">
                    {todos.map((todo) => {
                        return (
                            <TodoItem tarea={todo} key={todo.id} fnDelete={handleTodoDelete} fnStatusChange={handleTodoStatus} />
                        )
                    })}
                </ListGroup>
            </main>
        </Container>
    )
}
export default Main;

