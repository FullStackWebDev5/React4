import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "./components/TableComponent";
import { Container, Button, ProgressBar } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  // Replicating componentDidMount using useEffect hook
  useEffect(() => {
    console.log('Component Mounted!')
  }, [])

  // Replicating componentDidUpdate using useEffect hook
  useEffect(() => {
    console.log('Count or Show state was updated')
  }, [count, show])

  return (
    <Container className="App">
      {show && <TableComponent />}
      <Button variant="dark" onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </Button>
      <ProgressBar now={count} />
      <Button variant="dark" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </Container>
  );
}

export default App;
