import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TeamCardModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body style={{display: "flex"}}>
      {/* <img src={src} className="img-fluid" style={{width: "30%"}} /> */}
      <div style={{display: "block", padding: "30px"}}>
      <h4>{props.name}</h4>
      <h5>{props.title}</h5>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TeamCardModal;
