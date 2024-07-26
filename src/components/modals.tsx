

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


type ModalProp = {
  data: { open: boolean, data: string};
  hide?: Function;
}

export function PopModal ({ data,  hide }: ModalProp) {

  const [ show , setShow ] = useState<boolean>(data?.open);

  useEffect(()=>{
    setShow(data.open);
  },[data.open])

  const handleClose = () => hide();

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal {data.data}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ullam aliquid enim facere ad recusandae eligendi accusamus laudantium alias atque a veniam debitis, autem eaque perferendis maxime adipisci architecto similique.
          </p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}