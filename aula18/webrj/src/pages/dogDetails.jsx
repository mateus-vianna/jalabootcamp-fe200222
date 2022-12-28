import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getDogDetails } from "../services/dogService";
import { Card, ListGroup } from "react-bootstrap";
import { SignUp } from "./signUp";

const DogDetails = () => {
  const [dog, setDog] = useState();

  const { id } = useParams();

  const initialize = async () => {
    try {
      const result = await getDogDetails(id);
      setDog(result);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    initialize();
  }, [id]);

  return <div className="ml-5 mt-5">
  <div class="text-align">
  <h1>{dog?.name} Details</h1>
  </div>
  <div
    className="flex flex-row mt-5 dogDiv"
    style={{ height: "900px", overflowY: "scroll" }}
  >
    <div className="mt-5, mr-5">
      <Card 
      bg= "danger"
      key= "danger"
      text= "dark"
      style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/28/10/3e/28103ed99001c8902a0545d7b15abc47.jpg"
        />
        <Card.Body>
          <Card.Title>{dog?.name}</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. erat id pharetra pulvinar, neque ex lobortis dolor, vel tristique mi risus ut nulla.</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item variant="danger">Breed: {dog?.breed}</ListGroup.Item>
          <ListGroup.Item variant="danger">Age: {dog?.age}</ListGroup.Item>
          <ListGroup.Item variant="danger">Transaction: {dog?.transaction}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
    <div>
    <>
        <Card
          bg= "dark"
          key= "dark"
          text= "white"
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Details</Card.Header>
          <Card.Body>
            <Card.Title> Men Bestfriend </Card.Title>
            <Card.Text>
              Here comes a awesome description about this dog ;)
            </Card.Text>
          </Card.Body>
        </Card>
    </>
    <>
        <Card
          bg= "danger"
          key= "danger"
          text= "dark"
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Details</Card.Header>
          <Card.Body>
            <Card.Title> Also everyone bestfriend too </Card.Title>
            <Card.Text>
              Here comes a awesome description about this dog ;)
            </Card.Text>
          </Card.Body>
        </Card>
    </>
    
    </div>
    <div class="ml-5">
      <h5>How if you contact this figure? Just Sing Up</h5>
      <SignUp />
    </div>
  </div>
</div>
};

export { DogDetails };
