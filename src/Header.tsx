// Header.tsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Bookshelf App</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/browse-books">
          <Nav.Link>Browse Books</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/create-new-book">
          <Nav.Link>Create New Book</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
