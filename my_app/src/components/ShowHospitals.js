import React, { Fragment, useEffect, useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Table } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShowBranch from "./ShowBranch";
// import DeleteBranch from "./DeleteBranch";
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
import AddBranch from "./AddBranch";
import UpdateBranch from "./UpdateBranch";
var p = 12;
var p1 = 12;
const ShowHospitals = () => {
  useEffect(() => {
    document.title = "Hospitals";
  }, []);

  function setP(temp1) {
    p = temp1;
  }
  function setP1(temp1) {
    p1 = temp1;
  }
  const [branch1, setBranch] = useState([]);

  const handleForm = (e) => {
    console.log(branch.name);
    console.log(address.addressLine1);
    branch.address = id === 1 ? address : null;
    postDataToServer(branch);
    e.preventDefault();
  };
  //function to post data on server
  const postDataToServer = (data) => {
    axios.post(`http://localhost:8080/branch`, data).then(
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

  //calling loading branch details form server
  useEffect(() => {
    getAllBranchesFromServer();
  }, []);

  const [hospital, setHospital] = useState([]);
  const [address, setAddress] = useState({});
  const [id, setId] = useState(0);
  const [branch, setBranches] = useState({});

  const getAllHospitalsFromServer = () => {
    axios
      .get(`http://localhost:8080/profile`)
      .then((response) => {
        // console.log(response.data);
        setHospital(response.data);
        // settingAddress(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  //function to call server
  const getAllBranchesFromServer = (param) => {
    axios
      .get(`http://localhost:8080/branch`)
      .then((response) => {
        // console.log(response.data);
        setBranch(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    getAllHospitalsFromServer();
  }, []);

  var count = 0;
  var t = new Array();
  var t2 = new Array();
  var updateId;

  function setTemp(d) {
    t = [];
    t = d;
  }

  var p = 12;

  function check(a) {
    return t.indexOf(a);
  }

  function removeIt(o) {
    //no clue what to put here?
    // var p = o.parentNode.parentNode;
    console.log("Clicked");
    axios.delete(`http://localhost:8080/branch/${o}`).then(
      (response) => {
        console.log(response);
        console.log("success");
        window.location.reload(false);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  }

  return (
    <Router>
      <div className="p-2 m-2">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Institution_Id</th>
              <th>Institution_Name</th>
              <th>About_Us</th>
              <th>Number_Of_Beds</th>
              <th>ICU_Beds</th>
              <th>Path_Lab</th>
              <th>Trauma_Facility</th>
              <th>infectious_Disease_Facility</th>
              <th>Ambulance_Facility</th>
              <th>Psychiatric_Facility</th>
              <th>Website_Address</th>
              <th>Status</th>
              <th>Banner_Url</th>
              <th>Psychiatric_Facility</th>
              <th>CreatedOn</th>
              <th>UpdatedOn</th>
              <th>Address Id</th>
              <th>Branches</th>
            </tr>
          </thead>

          <tbody>
            {hospital.map((e) => (
              <tr>
                <Link to="/show-branch">
                  <td
                    id={e.id}
                    onClick={() => {
                      t2 = [];
                      e.branch.map((s) => {
                        t2.push(s.id);
                      });
                      setTemp(t2);
                    }}
                  >
                    {e.id}
                  </td>
                </Link>
                <td id={e.institutionName}>{e.institutionName}</td>
                <td id={e.aboutUs}>{e.aboutUs}</td>
                <td id={e.noOfBed}>{e.noOfBed}</td>
                <td id={e.icuBed}>{e.icuBed}</td>
                <td id={e.pathLab}>{e.pathLab}</td>
                <td id={e.trumaFacility}>{e.trumaFacility}</td>
                <td id={e.infectiousDiseaseFacility}>
                  {e.infectiousDiseaseFacility}
                </td>
                <td id={e.psychiatricFacility}>{e.psychiatricFacility}</td>
                <td id={e.ambulanceFacility}>{e.ambulanceFacility}</td>
                <td id={e.websiteAddress}>{e.websiteAddress}</td>
                <td id={e.id.status}>{e.id.status}</td>
                <td id={e.bannerUrl}>{e.bannerUrl}</td>
                <td id={e.psychiatricFacility}>{e.psychiatricFacility}</td>
                <td id={e.createdOn}>{e.createdOn}</td>
                <td id={e.updatedOn}>{e.updatedOn}</td>
                <td id={e.address.id}>{e.address.id}</td>

                <td id={e.branch}>
                  {e.branch.map((e1) => (
                    <div key={e1.name}>
                      <row>{e1.name}</row>
                    </div>
                  ))}
                  {setP1(e.id)}
                  <Link to={`/add-new-branch/${p1}`}>ADD New</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Route
          path="/show-branch"
          component={() => {
            return (
              <Container>
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <td>Branch_Id</td>
                      <td>Branch_Name</td>
                      <td>Created_On</td>
                      <td>Updated_On</td>
                      <td>Delete</td>
                      <td>Update It</td>
                    </tr>
                  </thead>
                  <tbody id="bd">
                    {branch1.map((e2) =>
                      check(e2.id) !== -1 ? (
                        <tr>
                          <td id={e2.id}>{e2.id}</td>
                          <td id={e2.id}>{e2.name}</td>
                          <td id={e2.id}>{e2.createdOn}</td>
                          <td id={e2.id}>{e2.updatedOn}</td>
                          <td id={e2.id}>
                            <Link
                              onClick={function () {
                                removeIt(e2.id);
                              }}
                            >
                              Delete it
                            </Link>
                          </td>
                          <td id={e2.id}>
                            {setP(e2.id)}
                            <Link to={`/update-branch/${p}`}>Update It</Link>
                          </td>
                        </tr>
                      ) : (
                        ""
                      )
                    )}
                  </tbody>
                </table>
              </Container>
            );
          }}
        />
      </div>
      <div>
        <Route path="/update-branch/:p" component={UpdateBranch} exact />
        <Route path="/add-new-branch/:p1" component={AddBranch} exact />
      </div>
    </Router>
  );
};

export default ShowHospitals;
// anurag neg
