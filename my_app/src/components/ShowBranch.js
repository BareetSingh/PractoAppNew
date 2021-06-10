import React, { useEffect, useState, Component } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";

const ShowBranch = () => {
  useEffect(() => {
    document.title = "All Branches";
  }, []);

  const [branch, setBranch] = useState([]);
  // const [address, setAddress] = useState([]);

  //function to call server
  const getAllBranchesFromServer = (param) => {
    axios
      .get(`http://localhost:8080/branch`)
      .then((response) => {
        // console.log(response.data);
        setBranch(response.data);
        // settingAddress(response.data);
        // console.log(address);
        <NavBar />;
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  //calling loading branch details form server
  useEffect(() => {
    getAllBranchesFromServer();
  }, []);

  var t;
  function setTemp(temp) {
    t = [];
    t = temp;
  }
  return (
    <Container>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <td>Branch_Id</td>
            <td>Branch_Name</td>
            <td>Created_On</td>
            <td>Updated_On</td>
            <td>Address_Id</td>
          </tr>
        </thead>
        <tbody>
          {branch.map((e) => (
            <tr>
              <Link to="/show-branch">
                <td
                  id={e.id}
                  onClick={() => {
                    var t2 = [];
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
export default ShowBranch;
