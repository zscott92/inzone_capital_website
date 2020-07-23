import React, { useState, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Container, Col } from 'reactstrap';
import JimProfilePicture from '../../images/profilepics/jim_scott_profile_pic.jpg'

const UserModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <Button className="cardButton" onClick={toggle} color="secondary">About</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="modalHeader"><img src={JimProfilePicture} className="modalProfilePicture" alt="Profile"/><h4 className="usersName">Jim Scott</h4></ModalHeader>
        <ModalBody>
          <p className="bioParagraph">Jim began his entrepreneurial career in 1982 with $300 in savings and has applied financial
          leverage in business owned throughout my career to maintain my private company status. He's proud
          of the fact that he's never had outside equity in any of them. He began his career by starting two
          companies, Alpha Products and Bulldog Movers. Bulldog Movers was sold to a management buyout in 1989 and Alpha Products was sold to Aladdin Industries in 1994. After taking three years off before his next venture, Inzone Capital was born. Inzone Capital
          was built from the ground up, and consisted of two companies: <a href="https://www.bubbabrands.com/" className="companyLinks"> Bubba Brands</a>(sold to Newell Rubbermaid in 2014), and <a href="https://www.good2grow.com" className="companyLinks">good2grow </a>(sold to Kainos Capital in 2018).
          </p>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}


export default UserModal;