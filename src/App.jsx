import React from 'react';
import Feed from './components/Feed.jsx';
import Stats from './components/Stats.jsx';
import { Accordion, Button, Navbar, Nav, DropdownButton, Container, Row, Col } from 'react-bootstrap';
import './style.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'feed'};
  }



  renderView() {
    const {view} = this.state;

    if (view === 'feed') {
      return <Feed
      />;
  } else if (view === 'stats') {
    return <Stats
    />
  }
}




render() {
  return (
      <Container>
        <Row>
      <Col >
      <img class="d-block m-auto" src="https://chuck3774bucket.s3.us-east-2.amazonaws.com/2.png"/>
       </Col>
        </Row>

        <Row>
          <Col>

        <Nav
        style={{
          backgroundColor: '#E9A637',
          borderRadius: '5px',
          borderColor: '#A11100',
        }}
        className="justify-content-center">
  <Nav.Link
     style={{
       color: '#A11100'
      }}
      name="feed"
      onClick={(e) => this.changeView(e)}>Feed</Nav.Link>
    <Nav.Link
    style={{
      color: '#A11100'
    }}
    name="friends"
    onClick={(e) => this.changeView(e)}>Friends</Nav.Link>
    <Nav.Link
    style={{
      color: '#A11100'
    }}
    name="notifications"
    onClick={(e) => this.changeView(e)}>Notifications</Nav.Link>
     </Nav>

          </Col>
        </Row>
  <Row>

    {this.renderView()}

  </Row>
  </Container>

  );
}
}

export default App;