import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/groups">Manage Fingit App</Link></Button>
                    <Button color="link"> <a href="https://www.fingit.co/" target="_blank">Fingit web</a> </Button>
                </Container>
            </div>
        );
    }
}

export default Home;