import React, { ReactEventHandler, useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Button, Card, CardBody, CardHeader } from "react-bootstrap";
// Register Chart.js components
Chart.register(...registerables);

type ChartProps = {
  moreOnChart: ReactEventHandler;
  datas?: any;
  labels?: string[];
  title: string;
};

export const PieChart: React.FC<ChartProps> = ({
  title,
  datas,
  moreOnChart,
}) => {
  const [points, setPoints] = useState<{ labels: any[]; datasets: any[] }>(
    datas
  );

  useEffect(() => setPoints(datas), [datas]);

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <span className="h5">{title || "Le titre "}</span>
        <Button
          onClick={moreOnChart}
          className="btn-secondary"
          title="Voir Plus ->"
        />
      </CardHeader>
      <CardBody>
        <Pie data={points} options={options} />
      </CardBody>
    </Card>
  );
};

export const LineChart: React.FC<ChartProps> = ({
  title,
  datas,
  moreOnChart,
}) => {
  const [points, setPoints] = useState<{
    labels: string[];
    datasets: any[];
  }>(datas);

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  useEffect(() => setPoints(datas), [datas]);

  return (
    <Card style={{ width: "98%" }}>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <span className="h5">{title || "Line Chart"}</span>
        <Button
          onClick={moreOnChart}
          className="btn-secondary"
          title="Voir Plus ->"
        />
      </CardHeader>
      <CardBody>
        <Line data={points} options={options} />
      </CardBody>
    </Card>
  );
};

export const BarChart: React.FC<ChartProps> = ({
  title,
  datas,
  moreOnChart,
}) => {
  const [points, setPoints] = useState<{
    labels: string[];
    datasets: {
      backgroundColor: string[];
      data: number[];
    }[];
  }>(datas);

  useEffect(() => setPoints(datas), [datas]);

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <Card style={{ width: "98%" }}>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <span className="h5">{title || "le titre"}</span>
        <Button
          onClick={moreOnChart}
          className="btn-secondary"
          title="Voir Plus ->"
        />
      </CardHeader>
      <CardBody>
        <Line data={points} options={options} />
      </CardBody>
    </Card>
  );
};
