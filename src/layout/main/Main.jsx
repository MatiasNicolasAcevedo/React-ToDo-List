import { Button, Container, Form, ListGroup, ListGroupItem,  } from "react-bootstrap";
import './Main';
import { useState } from "react";

const TODOS = [
    {
        text: 'Instalar NodeJS',
        status: false,
        id: 1,
    },
    {
        text: 'Crear proyecto con vite@latest',
        status: false,
        id: 2,
    },
    {
        text: 'Hacer un npm install de las dependencias',
        status: false,
        id: 3,
    }
];

function Main () {
    const [ todos, setTodos ] = useState(TODOS);
    
    function handleSubmit(event) {
        event.preventDefault();
        const text = event.target.elements.text.value;
        const todo = {
            text,
            status: false,
            id: crypto.randomUUID()    
        } 
        const newTodos = [...todos, todo];
        setTodos(newTodos);
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
                            <ListGroupItem className="d-flex gap-2" key={todo.id}>
                                <div className="w-100">
                                    {todo.text}
                                </div>
                                <Button className="btn-success" size="sm">
                                    <i className="fa-solid fa-check"></i>
                                </Button>
                                <Button className="btn-danger" size="sm">
                                    <i className="fa-solid fa-trash"></i>
                                </Button>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </main>
        </Container>
    )
}
export default Main;

