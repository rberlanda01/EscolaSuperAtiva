import React from 'react';
import { Router } from 'react-static'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { NavLink } from 'react-router-dom';

import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"

class Navbarr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
  
    render() {
        return (
            <div>
                <Router>
                    <Navbar  dark expand="md" scrolling>
                        <NavbarBrand className="navbar-brand" href="/">
                            <strong>LOGO</strong>
                        </NavbarBrand>
                        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav left>
                                <NavItem active>
                                    <NavLink to="/" >Inicio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Sobre" exact>Sobre</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Escola" exact>Escola</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Ensino" exact>Ensino</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Fotos" exact>Fotos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Video" exact>Vídeo</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Contato" exact>Contato</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Noticias" exact>Notícias</NavLink>
                                </NavItem>
                            </NavbarNav>
                            <NavbarNav right>
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                </Router>
            </div >
        );
    }
}

export default Navbarr;