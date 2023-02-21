import React from 'react'
import './Header.css'
import { Container, Navbar } from 'react-bootstrap'

import logo from '../../assets/logo192.png'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg='dark' variant='dark' sticky='top'>
                <Container>
                    <div className="my-navbar">
                        <CustomLink className='link' to={'/'}>
                            <div className="brand">Seyton35</div>
                        </CustomLink>
                        <CustomLink className='link' to={'/'}>Главная</CustomLink>
                        <CustomLink className="link" to={'/petProjects'}>Проекты</CustomLink>
                        <CustomLink className="link" to={'/games'}>Игры</CustomLink>
                        <CustomLink className="link" to={'/profile'}>Обо мне</CustomLink>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}