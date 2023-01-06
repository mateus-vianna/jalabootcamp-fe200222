import React, { useEffect, useState } from "react";
import { getAllDogs } from "../services/dogService";
import { Link} from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";


const ListDog = () => {
  const [dogs, setDog] = useState([]);

  const initialize = async () => {
    try {
      const result = await getAllDogs();
      setDog(result);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="ml-5 mt-5">
      <h1>OUR DOGS</h1>
      <div
        className="flex flex-row mt-5"
        style={{ height: "900px", overflowY: "scroll" }}
      >
        {dogs.map((dog, index) => {
          return (
            <div key={index} className="mt-5, mr-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/dog.png"
                />
                <Card.Body>
                  <Card.Title>{dog.name}</Card.Title>
                  <Card.Text>
                    Lorem Ipsum
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Breed: {dog.breed}</ListGroup.Item>
                  <ListGroup.Item>Age: {dog.age}</ListGroup.Item>
                  <ListGroup.Item>Transaction: {dog.transaction}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Card.Text>
                    <Link to={`/details/${dog._id}`}><Button variant="danger">See Details</Button>{' '}</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListDog;
