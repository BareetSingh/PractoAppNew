import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  ButtonGroup,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const AddBranch = ({ match }) => {
  let params = match.params;

  useEffect(() => {
    document.title = "Add Branch";
    console.log("get it" + params.p1);
    // alert(temp);
  }, []);
  const [id, setId] = useState(0);
  const [branch, setBranch] = useState({});
  const [address, setAddress] = useState({});

  //function to handle Form
  const handleForm = (e) => {
    console.log(branch.name);
    console.log(address.addressLine1);
    branch.address = id === 1 ? address : null;
    postDataToServer(branch);
    e.preventDefault();
  };

  //function to post data on server
  const postDataToServer = (data) => {
    axios.post(`http://localhost:8080/branch/${params.p1}`, data).then(
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
    <div className="container">
      <Form className="my-3" onSubmit={handleForm}>
        <h1>Add New Branch</h1>
        <FormGroup row>
          <Label for="branchName" sm={2} size="lg">
            Branch
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="branchName"
              id="branchName"
              placeholder="Enter Branch Name Here"
              bsSize="lg"
              onChange={(e) => {
                setBranch({ ...branch, name: e.target.value });
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="branchName" sm={2} size="lg">
            Address
          </Label>

          <Label size="lg" className="ml-3">
            Add Now
            <input
              type="radio"
              className="ml-1"
              name="address"
              id="rad1"
              onChange={(e) => setId(1)}
            />
          </Label>
          <Label size="lg" className="ml-4">
            Remind me later
            <input
              type="radio"
              className="ml-1"
              name="address"
              id="rad2"
              onChange={(e) => setId(0)}
            />
          </Label>

          <div id="no"></div>
        </FormGroup>

        <div>
          {id === 1 ? (
            <div>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="addressLine1">Address Line 1</Label>
                    <Input
                      type="textarea"
                      name="addressLine1"
                      id="addressLine1"
                      placeholder="Address Line 1"
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          addressLine1: e.target.value,
                        });
                      }}
                    />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <Label for="addressLine2">Address Line 2 </Label>
                    <Input
                      type="textarea"
                      name="addressLine2"
                      id="addressLine2"
                      placeholder="Address Line 2"
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          addressLine2: e.target.value,
                        });
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          city: e.target.value,
                        });
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="district">District</Label>
                    <Input
                      type="text"
                      name="district"
                      id="district"
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          district: e.target.value,
                        });
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Pincode</Label>
                    <Input
                      type="text"
                      name="zip"
                      id="exampleZip"
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          pincode: e.target.value,
                        });
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="state">State</Label>
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          state: e.target.value,
                        });
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="country">Country</Label>
                    <Input
                      type="text"
                      name="country"
                      id="country"
                      onChange={(e) => {
                        setAddress({
                          ...address,
                          country: e.target.value,
                        });
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          ) : null}
        </div>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddBranch;
