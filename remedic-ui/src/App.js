import "./App.css";
import logo from "./Lifesavers.png";
import {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  Image,
  Typography,
  PageHeader,
  Table,
  Tag,
  Space,
  Form,
  Input,
  InputNumber,
  // Checkbox,
  Radio,
  DatePicker,
  // RangePicker,
  TimePicker,
  Card,
  Timeline,
  Switch
} from "antd";

import { Line } from '@ant-design/charts';

import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  UnorderedListOutlined,
  HeartOutlined,
  MinusCircleOutlined,
  // ClockCircleOutlined,
} from "@ant-design/icons";
const { Title } = Typography;

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

function App() {
  // const style = { padding: '8px 0' };
  // const titleStyle = { marginTop:'10%',marginBottom:'20%', fontSize:'50px' };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="addnew" element={<AddNew />} />
        <Route path="list" element={<List />} />
        <Route path="care" element={<Care />} />
      </Routes>
      {/* <header className="App-header"> */}
      {/* <BellOutlined /> */}

      {/* </header> */}
    </div>
  );
}

function Home(props) {  
  // const history = useHistory();
  const style = { padding: "8px 0", width: "100%" };
  const titleStyle = {
    paddingTop: "10%",
    marginBottom: "30px",
    fontSize: "40px",
    // fontFamily: 'Bebas Neue',
    color: "#604AF6",
  };

  // const care = () => {
  //   //move to new page
  //   console.log("care");
  // };

  return (
    <>
      <Title style={titleStyle}>Pill Oh!</Title>

      <Image width={200} src={logo} preview={false} />

      <Row gutter={8}>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Link to="/addnew">
           
              <Button type="primary" className="home-btn" icon={<PlusOutlined />} size={'large'}>
               Add
              </Button>
            </Link>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Link to="/list">
            <Button type="primary" className="home-btn" icon={<UnorderedListOutlined />} size={'large'}>
            List
              </Button>
              
            </Link>
            {/* <Button type="primary" onClick={()=>scan()}>Scan</Button> */}
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Link to="/care">
            <Button type="primary" className="home-btn" icon={<HeartOutlined />} size={'large'}>
            Care
              </Button>
             
            </Link>
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

function AddNew() {
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Link to="/">
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Add New"
          subTitle=""
          extra={[
            <Button key="1" type="primary">
              Save
            </Button>,
          ]}
        />
      </Link>
      <div className="addnew-form">
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Sex"
            name="sex"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <Radio.Group>
              <Radio.Button value={"male"}>Male</Radio.Button>
              <Radio.Button value={"female"}>Female</Radio.Button>
              <Radio.Button value={"other"}>Other</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.List
            name="names"
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error("At least 1 tablet"));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Card style={{ width: 300 }}>
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Tablets" : ""}
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input tablet's name or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="tablet name"
                          style={{ width: "60%", float: "left" }}
                        />

                        {/* <Input placeholder="number" style={{ width: '20%' }} /> */}
                      </Form.Item>

                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input tablet's name or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        {/* <Input placeholder="tablet name" style={{ width: '40%' }} /> */}

                        <Input
                          placeholder="number"
                          style={{
                            width: "30%",
                            marginLeft: "10%",
                            float: "left",
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="date-picker"
                        label="Select Day Range"
                        {...config}
                        style={{ width: "100%" }}
                      >
                        {/* <DatePicker /> */}
                        <RangePicker />
                        <Form.Item
                          name="time-picker"
                          label="Select a time"
                          {...config}
                        >
                          <TimePicker />
                        </Form.Item>
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  </Card>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    // style={{ width: "60%" }}
                    icon={<PlusOutlined />}
                  >
                    Add Prescription
                  </Button>

                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            {/* <Button type="default" htmlType="submit">
          Cancel
        </Button> */}
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

function List() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // render: text => <a href="" alt="">{text}</a>,
    },

    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }

            if (tag.indexOf("AM") !== -1) {
              return (
                <Tag color={color} key={tag}>
                  TIME: {tag.toUpperCase()}
                </Tag>
              );
            } else {
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            }
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined />
          <DeleteOutlined />

          {/* <a>Invite {record.name}</a>
          <a>Delete</a> */}
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["Synthroid", "Crestor", "Daily", "9pm", "10am"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["Nexium"],
    },
    {
      key: "4",
      name: "Gokul",
      age: 24,
      address: "London No. 1 Lake Park",
      tags: ["Fish Oil","Daily","9pm"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["Lyrica "],
    },
  ];
  return (
    <>
      <Link to="/">
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="List"
          subTitle=""
        />
      </Link>
      <div style={{ padding: "1%" }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}

function Care() {

  const [displayType,setDisplayType] = useState(true)
  const data = [
    { year: "21-Nov", value: 2 },
    { year: "22-Nov", value: 2 },
    { year: "23-Nov", value: 0 },
    { year: "24-Nov", value: 2 },
    { year: "25-Nov", value: 0 },
    
  ];

  const config = {
    data,
    height: 200,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  const onChange = (checked) => {
    setDisplayType(checked)
    console.log(`switch to ${checked}`);
  }

  return (
    <>
      <Link to="/">
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Care"
          subTitle=""
         
        />
      </Link>
      <div style={{ padding: "1%" }}>

      <Row gutter={8}>
        <Col className="gutter-row" span={16}>
        <Title level={5}>Patient Messaging Review</Title>

          </Col>
          <Col className="gutter-row" span={8}>
        

<Switch style={{marginBottom:'10%'}} checkedChildren="Chart" unCheckedChildren="Timeline" defaultChecked onChange={onChange} />
          </Col>
          </Row>
      
      <br/>
        {
          displayType && (
            <Line {...config} style={{width:'80%',margin:'auto',marginBottom:'5%'}} />
          )
        }

        {
          !displayType && (
            <div style={{padding:'1%'}}>
            <Timeline mode="alternate" >
            <Timeline.Item>Created reminder for Nexium on 21-Nov-2021 to 25-Nov-2021</Timeline.Item>
            <Timeline.Item color="green">
              Reminder successful on 21-Nov-2021
            </Timeline.Item>
            <Timeline.Item color="green">
              Reminder successful on 22-Nov-2021
            </Timeline.Item>
            <Timeline.Item color="red">
              Reminder successful on 23-Nov-2021
            </Timeline.Item>
            <Timeline.Item color="green">
              Reminder successful on 24-Nov-2021
            </Timeline.Item>
            <Timeline.Item color="red">
              Reminder fail on 25-Nov-2021
            </Timeline.Item>
            
          </Timeline>
          </div>
          )
        }
        
       
      </div>
    </>
  );
}

export default App;
