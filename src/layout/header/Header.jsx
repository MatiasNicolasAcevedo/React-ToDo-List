import { Container, Navbar } from "react-bootstrap"

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>React todo</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
export default Header