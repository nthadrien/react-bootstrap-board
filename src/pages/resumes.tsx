import React from "react";
import { CardHeader, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TablesVersion1, TablesVersion2 } from "../components/tables";
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

const OrderstableData = db.orders;

const cards = [
  {
    variant: 'Primary',
    text: 'This is a primary card with important information.',
    header: 'Primary Header',
    title: 'Primary Card Title'
  },
  {
    variant: 'Secondary',
    text: 'This is a secondary card with additional details.',
    header: 'Secondary Header',
    title: 'Secondary Card Title'
  },
  {
    variant: 'Success',
    text: 'This card indicates a successful operation.',
    header: 'Success Header',
    title: 'Success Card Title'
  },
  {
    variant: 'Danger',
    text: 'This card warns about a potential issue.',
    header: 'Danger Header',
    title: 'Danger Card Title'
  },
];

const cards2 = [
  {
    variant: 'Warning',
    text: 'This card provides a warning message.',
    header: 'Warning Header',
    title: 'Warning Card Title'
  },
  {
    variant: 'Info',
    text: 'This card contains informational content.',
    header: 'Info Header',
    title: 'Info Card Title'
  },
  {
    variant: 'Light',
    text: 'This is a light-themed card for general use.',
    header: 'Light Header',
    title: 'Light Card Title'
  },
  {
    variant: 'Dark',
    text: 'This card has a dark theme for emphasis.',
    header: 'Dark Header',
    title: 'Dark Card Title'
  }
];

type CardProps = {
  data: {
    variant: string;
    title: string;
    header: string;
    content ?: string | string[];
  }
}


const RBoxCard: React.FC<CardProps> = ({ data }) => {

  const { variant, title, header, content } = data;

  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '100%' }}
      className="mb-2 text-start"
    >
      <Card.Header>{header}</Card.Header>
      <Card.Body >
        <Card.Title>{variant} {title} </Card.Title>
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
          { cards.map( card => <Col>
            <RBoxCard data={card} />
          </Col>)}
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
            <BarChart
              datas={boxCh}
              title="Bar Example"
              moreOnChart={toggleInfo}
            />
          </Col>
        </Row>

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
      <TablesVersion2 data={OrderstableData} />
    </>
  );
}
