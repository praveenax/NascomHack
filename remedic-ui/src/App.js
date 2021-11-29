import logo from "./Lifesavers.png";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Row, Col, Image } from "antd";
import "./App.css";

function App() {
  // const style = { padding: '8px 0' };
  // const titleStyle = { marginTop:'10%',marginBottom:'20%', fontSize:'50px' };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      {/* <header className="App-header"> */}
      {/* <BellOutlined /> */}

      {/* </header> */}
    </div>
  );
}

function Home() {
  const style = { padding: "8px 0" };
  const titleStyle = {
    
    marginBottom: "20%",
    fontSize: "50px",
  };

  const addNew = () => {
    //move to new page
    console.log('addnew')
  }

  const scan = () => {
    //move to new page
  }

  const care = () => {
    //move to new page
  }


  return (
    <>
      <div style={titleStyle}>Remedic</div>

      <Image width={200} src={logo} preview={false} />
      <img alt="" src={"./Lifesavers.png"} />

      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Button type="primary" onClick={()=>addNew()}>Add</Button>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Button type="primary">Scan</Button>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Button type="primary">Care</Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
