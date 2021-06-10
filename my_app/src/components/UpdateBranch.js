import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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

const UpdateBranch = ({ match }) => {
  let params = match.params;
  useEffect(() => {
    document.title = "Update Branch";
  }, []);

  const [branch, setBranch1] = useState({});
  const [address, setAddress] = useState({});

  //function to handle Form
  const handleForm = (e) => {
    toast("Successfully updated...");

    postDataToServer(branch);
    e.preventDefault();
  };
  useEffect(() => {
    getBranchFromServer();
  }, []);

  const getBranchFromServer = (param) => {
    axios
      .get(`http://localhost:8080/branch/${params.p}`)
      .then((response) => {
        setBranch1(response.data);
      })
      .catch((error) => {
        console.log("There are some Errors:- " + error);
      });
  };

  //function to post data on server
  const postDataToServer = (data) => {
    console.log(data);
    axios.put(`http://localhost:8080/branch/${params.p}`, data).then(
      (response) => {
        console.log(response);

        <ToastContainer />;

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
      <ToastContainer />
      <Form className="my-3" onSubmit={handleForm}>
        <h1> Branch</h1>
        <FormGroup row>
          <Label for="branchName" sm={2} size="lg">
            Branch Id
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="branchName"
              id="branchName"
              placeholder="Branch Id"
              bsSize="lg"
              value={branch.id}
              readOnly
              onChange={(e) => {
                setBranch1({ ...branch, name: e.target.value });
              }}
            />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="branchName" sm={2} size="lg">
            Branch Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="branchName"
              id="branchName"
              placeholder="Branch Name"
              bsSize="lg"
              value={branch.name}
              onChange={(e) => {
                setBranch1({ ...branch, name: e.target.value });
              }}
            />
          </Col>
        </FormGroup>

        <div>
          {
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
                      // value={branch.address.addressLine1}
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
                      // value={response.data.addressLine1}
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
                      // value={response.data.addressLine2}
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
                      // value={response.data.district}
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
                      // value={response.data.pincode}
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
                      // value={response.data.state}
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
                      // value={response.data.country}
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
          }
        </div>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UpdateBranch;
