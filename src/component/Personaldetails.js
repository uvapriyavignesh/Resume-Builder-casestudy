import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Purestring from "./Purestring";

function Personaldetails(props) {
  const [value, setValue] = props.stateContainer;
  const history = useHistory();

  function onChangeHandler(event) {
    event.target.name === "firstname"
      ? setValue((ps) => ({ ...ps, firstname: event.target.value }))
      : event.target.name === "email"
      ? setValue((ps) => ({ ...ps, email: event.target.value }))
      : event.target.name === "lastname"
      ? setValue((ps) => ({ ...ps, lastname: event.target.value }))
      : event.target.name === "website"
      ? setValue((ps) => ({ ...ps, yourwebsite: event.target.value }))
      : event.target.name === "linkedin"
      ? setValue((ps) => ({ ...ps, linkedin: event.target.value }))
      : event.target.name === "insta"
      ? setValue((ps) => ({ ...ps, insta: event.target.value }))
      : event.target.name === "phonenumber"
      ? setValue((ps) => ({ ...ps, phonenumber: event.target.value }))
      : event.target.name === "facebook"
      ? setValue((ps) => ({ ...ps, facebook: event.target.value }))
      : event.target.name === "twitter"
      ? setValue((ps) => ({ ...ps, twitter: event.target.value }))
      : event.target.name === "github"
      ? setValue((ps) => ({ ...ps, github: event.target.value }))
      : console.log("error");
  }
  useEffect(() => {
    console.log(value);
  });

  function Validator() {
    value.firstname === "" ||
    value.firstname === undefined ||
    value.lastname === "" ||
    value.lastname === undefined ||
    value.email === "" ||
    value.email === undefined ||
    value.phonenumber === "" ||
    value.phonenumber === undefined ||
    value.yourwebsite === "" ||
    value.yourwebsite === undefined ||
    value.linkedin === "" ||
    value.linkedin === undefined ||
    value.github === "" ||
    value.github === undefined ||
    value.twitter === "" ||
    value.twitter === undefined ||
    value.facebook === "" ||
    value.facebook === undefined ||
    value.insta === "" ||
    value.insta === undefined
      ? alert(" All Field must be Filled")
      : Purestring(value.firstname, "name")
      ? console.log("name in valid")
      : Purestring(value.lastname, "Lastname")
      ? console.log("Lastname in valid")
      : value.phonenumber.length < 10 || value.phonenumber.length > 10
      ? alert("Enter only 10 digit mobile number ")
      : history.push("/education");
  }

  return (
    <div id="personalDetails">
      <div>
        <h3>Personal Details</h3>
      </div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-6">
            <form>
              <div class="input-icons">
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="firstname"
                      value={value.firstname}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      placeholder="First Name *"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Email *"
                      value={value.email}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="website"
                      value={value.yourwebsite}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      placeholder="Your Website"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="linkedin"
                      value={value.linkedin}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      placeholder="Linked In"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="facebook"
                      value={value.facebook}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      placeholder="Face Book"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="col-6">
            <form>
              <div class="input-icons">
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="lastname"
                      value={value.lastname}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      placeholder="Last Name *"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="phonenumber"
                      value={value.phonenumber}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="github"
                      value={value.github}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      placeholder="Github"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="twitter"
                      value={value.twitter}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      placeholder="Twitter"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="insta"
                      value={value.insta}
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      placeholder="Instagram"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div class="row">
          <div class="col-5"></div>
          <div class="col-1">
            <button class="button" id="nxtbutton" type="button" disabled>
              {"<"}Back
            </button>
          </div>
          <div class="col-1">
            <button
              class="button"
              id="nxtbutton"
              type="button"
              onClick={() => {
                Validator();
              }}
            >
              Next{">"}
            </button>
            <p> </p>
            <br />
          </div>
          <div class="col-5"></div>
        </div>
        <Footer page={1} />
      </div>
    </div>
  );
}

export default Personaldetails;
