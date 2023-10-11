import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";


export default class Bootstrap extends React.Component {
    render () {
        return (
            <div>
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                        <Navbar.Brand href="#home">Andi Iqbal</Navbar.Brand>
                            <Nav className="me-auto">
                         <Nav.Link href="#profil">Profil</Nav.Link>
                         <Nav.Link href="#alamat">Alamat</Nav.Link>
                     <Nav.Link href="#info">Info</Nav.Link>
                    </Nav>
             </Container>
            </Navbar>
            <img src="logo192.png" alt="logo" style={{ display: 'block', margin: '0 auto' }} width={800} height={500} />
            <p align ='center'>
                My Bio </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
1945
loremHtml By Duco Defiant Dogfish on May 15 2020 
            </p>
            </div>
        )
    }
}