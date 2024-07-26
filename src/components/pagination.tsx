import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const TablesPagination: React.FC<any> = () => {
  return (
    <section className="container px-2 w-100 d-flex my-6 flex-wrap justify-content-between align-items-center">
      <Pagin />
      <ItemPerPage />
    </section>
  );
};


const Pagin : React.FC<any> = () => {
  return (
    <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
  );
}

const ItemPerPage: React.FC<any> = () => {
  return (
    <select
      className="form-select small-one"
      aria-label="Small-select"
      defaultValue={20}
    >
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </select>
  );
};
