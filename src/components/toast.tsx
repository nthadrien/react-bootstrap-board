import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { toastMsg } from "../interfaces";

type ToastyProps = { data: toastMsg };

const Toasty: React.FC<ToastyProps> = ({
  data,
}) => {
  const type = data.type === "error" ? "" : data.type === "warning" ? "" : "";

  const [show , setShow] = useState(true);

  return (
    <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide>
      <Toast.Header>
        <img
          onClick={() => setShow(false)}
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className={`me-auto text-capitalize ${type}`}>
          {data.type}
        </strong>
        <small className="text-muted">{data?.summary }</small>
      </Toast.Header>

      <Toast.Body>
        {data?.text} {data?.link? (<a href="/">click here</a> ): <></>}
      </Toast.Body>
    </Toast>
  );
};

export default function Toaster({
  passedMessages,
}: {
  passedMessages: toastMsg[];
}) {
  return (
    <ToastContainer className="position-fixed me-1">
      { passedMessages[0] &&
         passedMessages.map( message => (
          <Toasty
            data={message}
            key={message.text}
          />
        ))}
    </ToastContainer>
  );
}
