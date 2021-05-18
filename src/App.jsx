import React from 'react';
import Feed from './components/Feed.jsx';
import Stats from './components/Stats.jsx';
import { Accordion, Button, Navbar, Nav, DropdownButton, Container, Row, Col } from 'react-bootstrap';
import './style.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'feed', runs: []};
  }

  componentDidMount() {
    axios.get('localhost:3001/runs')
    .then((data) => {
      this.setState({runs: data})
    })
  }

  changeView(e) {
    const newView = e.target.name;
    this.setState({view: newView})
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
        <Row className="justify-content-md-center">
      <Col md={6}>
      <div className="title">Time2Fly</div>
       </Col>
        </Row>

        <Row>
          <Col>

        <Nav
        style={{
          backgroundColor: '#F4EF7D',
          borderRadius: '5px'
        }}
        className="justify-content-center">
  <Nav.Link
     style={{
       color: '#0A83B9'
      }}
      name="feed"
      onClick={(e) => this.changeView(e)}>Runs</Nav.Link>
    <Nav.Link
    style={{
      color: '#0A83B9'
    }}
    name="stats"
    onClick={(e) => this.changeView(e)}>Stats</Nav.Link>

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