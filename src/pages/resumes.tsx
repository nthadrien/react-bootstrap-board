import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TablesVersion1 } from "../components/tables";
import { BarChart, LineChart, PieChart } from "../components/charts";
import db from "../api/db.json";
import FunIcon from "../assets/icons/funny.svg?react";

// dummmy data
const boxCh = {
  labels: ["React", "Vue", "Angular"],
  datasets: [
    {
      data: [6, 8, 9],
      backgroundColor: ["Blue", "Green", "Red"],
    },
  ],
};

const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Bar Chart',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const pieChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'My Pie Chart',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const OrderstableData = db.orders;



const cards = [
  {
    variant: "Primary",
    text: "This is a primary card with important information.",
    header: "Primary Header",
    title: "Primary Card Title",
  },
  {
    variant: "Secondary",
    text: "This is a secondary card with additional details.",
    header: "Secondary Header",
    title: "Secondary Card Title",
    content:"Lorem iposui"
  },
  {
    variant: "Success",
    text: "This card indicates a successful operation.",
    header: "Success Header",
    title: "Success Card Title",
    content:"Pas decider"
  },
  {
    variant: "Danger",
    text: "This card warns about a potential issue.",
    header: "Danger Header",
    title: "Danger Card Title",
    content:"Pas decider"
  },
];

const cards2 = [
  {
    variant: "Warning",
    text: "This card provides a warning message.",
    header: "Warning Header",
    title: "Warning Card Title",
    content:"Pas decider"
  },
  {
    variant: "Info",
    text: "This card contains informational content.",
    header: "Info Header",
    title: "Info Card Title",
    content:"Pas decider"
  },
];

type CardProps = {
  data: {
    variant: string;
    title: string;
    header: string;
    content?: string | string[];
  };
};

const RBoxCard: React.FC<CardProps> = ({ data }) => {
  const { variant, title, header, content } = data;

  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "100%" }}
      className="mb-2 text-start"
    >
      <Card.Header>
        <FunIcon /> {header}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {variant} {title}{" "}
        </Card.Title>
        <Card.Text>{content && content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default function Resumes() {
  const toggleInfo = (e: any): void => {
    console.log(e.currentTarget);
  };

  return (
    <>
      <Container>
        <Row className="gap-4 my-4">
          {cards.map((card) => (
            <Col key={card.title}>
              <RBoxCard data={card} />
            </Col>
          ))}
        </Row>
      </Container>

      <h2 className="text-start">Separation</h2>
      <hr />

      <Container>
        <Row className="gap-4">
          <Col>
            <BarChart
              datas={boxCh}
              title="Bar Example"
              moreOnChart={toggleInfo}
            />
          </Col>
          <Col>
            <LineChart
              datas={boxCh}
              title="Bar Example"
              moreOnChart={toggleInfo}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
          <Container>
          {cards.map((card) => (
            <Row key={card.title}>
            <Col>
              <RBoxCard data={card} />
            </Col>
            </Row>
          ))}
            
          </Container>
          </Col>
          <Col>
            <PieChart title="activites" datas={pieChartData} moreOnChart={toggleInfo} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="gap-4 my-4">
          <Col>
            <BarChart
              datas={boxCh}
              title="Bar Example"
              moreOnChart={toggleInfo}
            />
          </Col>
          <Col>
            <BarChart
              datas={boxCh}
              title="Bar Example"
              moreOnChart={toggleInfo}
            />
          </Col>
        </Row>
      </Container>

      <h2 className="text-start">Separation</h2>
      <hr />

      <TablesVersion1 data={OrderstableData} />
    </>
  );
}
