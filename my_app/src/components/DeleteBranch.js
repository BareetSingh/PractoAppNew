import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const DeleteBranch = () => {
  const [branch, setBranch] = useState({});

  useEffect(() => {
    document.title = "Delete Branch";
  }, []);

  //function to handle Form
  const handleForm = (e) => {
    // console.log(branch.id);
    sendIdToServer(branch.id);
    e.preventDefault();
  };

  //function to delete data on server
  const sendIdToServer = (data) => {
    axios.delete(`http://localhost:8080/branch/${data}`).then(
      (response) => {
        console.log(response);
        console.log("success");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };
  return (
    <div>
      <Form className="my-3" onSubmit={handleForm}>
        <h1>Delete Branch</h1>
        <FormGroup row>
          <Label for="branchName" sm={2} size="lg">
            Branch Id
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="branchName"
              id="branchName"
              placeholder="Enter Branch Id here"
              bsSize="lg"
              onChange={(e) => {
                setBranch({ ...branch, id: e.target.value });
              }}
            />
          </Col>
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default DeleteBranch;
