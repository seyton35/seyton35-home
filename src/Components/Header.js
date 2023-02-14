import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'
import logo from '../assets/logo192.png'


export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        src={logo}
                        height={30}
                        width={30}
                        className='d-inline-block aling-top'
                        alt='Logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/'>Главная</Nav.Link>
                        <Nav.Link href='/petProjects'>проекты</Nav.Link>
                        <Nav.Link href='/games'>игры</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}