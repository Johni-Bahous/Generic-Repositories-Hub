import { Modal } from "react-bootstrap";
import "../sass/error.scss";
import { useEffect, useState } from "react";

export interface ErrorProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Error = ({  
  isOpen,
  onClose = () => {},}:ErrorProps) => {
  const [show, setShow] = useState(isOpen);
  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  function handleClose() {
    setShow(false);
    onClose();
  }
  return (
        <Modal
          dialogClassName="error"
          animation={false}
          show={show}
          onHide={handleClose}
        >
          <Modal.Header className="error-title">
            <Modal.Title className="error-title">
              Error
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="error-body">
          User does not exist. Please check the username and try again.
          </Modal.Body>
        </Modal>
  )
}

export default Error