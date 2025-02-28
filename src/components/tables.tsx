import Table from "react-bootstrap/Table";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  MouseEvent,
  ReactElement,
  useState
} from "react";
import { TablesPagination } from "./pagination";
import { PopModal } from "./modals";
import classes from "./tables.module.css";

type BtnProps = {
  action: Function;
};

type TableProps = {
  data: any[];
};


const TableCell = ({row , cell}:{ row:any , cell: string}) : ReactElement => {
  switch (cell) {
    case "articles":
      return <td>{ row[cell].length } </td>
      break;
    case "status":
      return <td> <span  className={row.status === "pending"?classes.pending : classes.danger }>
        { row[cell] }
      </span> </td>
        break;
    default:
      return <td>{row[cell]}</td>
      break;
  }
}


function TableBtn({ action }:BtnProps) {

  const list: string[] = ["editer", "supprimer", "inspecter", "plus"];

  const threadAction = (e: MouseEvent) => action(e.currentTarget.textContent);

  return (
    <DropdownButton
      className="stick-top"
      as={ButtonGroup}
      id={`dropdown-variants-Primary`}
      variant={"variant".toLowerCase()}
      title={"..."}
    >
      {list.map((item) => (
        <Dropdown.Item onClick={threadAction} key={item} eventKey="1">
          {item}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Supprimer</Dropdown.Item>
    </DropdownButton>
  );
}

export function TablesVersion1({ data }: TableProps) {

  const [ pop , setPop ] = useState<{ open: boolean , data: string }>({ open: false, data: "2" });
  
  if (!data[0])
    return (
      <div>
        <h2>Aucune saisie de données </h2>
      </div>
    );

  const headings: string[] = data[0] && Object.keys(data[0]).filter( a => a !== "id");

  const sendAction = (a:string) => setPop({ open : true , data: a });
 
  return (
    <>
      <Table responsive="sx" className="container border border-collapse">
        <thead>
          <tr className="text-capitalize">
            <th>#</th>
            {headings.map((head) => (
              <th key={head}> {head.replace("-", " ")} </th>
            ))}
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data[0] &&
            data.map( (row, index) => <tr key={row["id"]}>
              <td>{index + 1}</td>
                {headings.map( cell => <TableCell key={cell} row={row} cell={cell} />)}
                <td> <TableBtn action={sendAction} /> </td>
              </tr>
          )}
        </tbody>
      </Table>

      <PopModal data={pop} hide={()=>setPop({ open: false, data: ""})} />

      <TablesPagination />
    </>
  );
}