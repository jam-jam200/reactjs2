import React from "react";
import { Nav } from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/about">
              About Us
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/posts">
              Posts
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-3" href="/contact">
              Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
    );
  }
}

export default Navigation;
