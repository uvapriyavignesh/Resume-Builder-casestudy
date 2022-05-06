import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Purestring from "./Purestring";

function ProjectDetails(props) {
  const [value, setValue] = props.stateContainer;
  const history = useHistory();
  function onChangeHandlerProject(event) {
    event.target.name === "title"
      ? setValue((ps) => ({ ...ps, projectTitle: event.target.value }))
      : event.target.name === "link"
      ? setValue((ps) => ({ ...ps, projectLink: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({ ...ps, projectDescription: event.target.value }))
      : console.log("Error storing project details");
  }
  function Back() {
    history.push("/education");
  }
  function onChangeHandlerProject1(event) {
    event.target.name === "title"
      ? setValue((ps) => ({ ...ps, Project1Title: event.target.value }))
      : event.target.name === "link"
      ? setValue((ps) => ({ ...ps, Project1Link: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({ ...ps, Project1Description: event.target.value }))
      : console.log("Error storing Project1 details");
  }
  useEffect(() => {
    console.log(value);
  });
  function Validator() {
    value.projectTitle === "" ||
    value.projectTitle === undefined ||
    value.projectLink === "" ||
    value.projectLink === undefined ||
    value.Project1Description === "" ||
    value.Project1Description === undefined ||
    value.projectDescription === "" ||
    value.projectDescription === undefined ||
    value.Project1Title === "" ||
    value.Project1Title === undefined ||
    value.Project1Link === "" ||
    value.Project1Link === undefined
      ? alert(" All Field must be Filled")
      : Purestring(value.projectTitle, "projectTitle")
      ? console.log("rojectTitle in valid")
      : Purestring(value.Project1Title, "Project Title 2")
      ? console.log("Project Title 2")
      : history.push("/experience");
  }
  return (
    <div>
      <div>
        <h3>Project Details</h3>
      </div>

      <hr />
      <div class="row">
        <div>
          <h4>Project 1</h4>
        </div>

        <div class="col-2"></div>
        <div class="col-8">
          <input
            type="text"
            class="form-control"
            name="title"
            value={value.projectTitle}
            onChange={(e) => {
              onChangeHandlerProject(e);
            }}
            placeholder="title *"
            required
          />
          <input
            type="text"
            class="form-control"
            name="link"
            value={value.projectLink}
            onChange={(e) => {
              onChangeHandlerProject(e);
            }}
            placeholder="Link *"
            required
          />
          <input
            type="text"
            class="form-control"
            name="description"
            value={value.projectDescription}
            onChange={(e) => {
              onChangeHandlerProject(e);
            }}
            placeholder="Description*"
            required
          />
        </div>
        <div class="col-2"></div>
      </div>
      <hr />
      <div class="row">
        <div>
          <h4>Project 2</h4>
        </div>

        <div class="col-2"></div>
        <div class="col-8">
          <input
            type="text"
            class="form-control"
            name="title"
            value={value.Project1Title}
            onChange={(e) => {
              onChangeHandlerProject1(e);
            }}
            placeholder="title *"
            required
          />
          <input
            type="text"
            class="form-control"
            name="link"
            value={value.Project1Link}
            onChange={(e) => {
              onChangeHandlerProject1(e);
            }}
            placeholder="Link *"
            required
          />
          <input
            type="text"
            class="form-control"
            name="description"
            value={value.Project1Description}
            onChange={(e) => {
              onChangeHandlerProject1(e);
            }}
            placeholder="Description*"
            required
          />
        </div>
        <div class="col-2"></div>
      </div>
      <div>
        <div class="row">
          <div class="col-5"></div>
          <div class="col-1">
            <button class="button" id="nxtbutton" type="button" onClick={Back}>
              <span>{"<"}Back</span>
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
              <span>Next{">"}</span>
            </button>
            <p> </p>
            <br />
          </div>
          <div class="col-5"></div>
        </div>
        <Footer page={3} />
      </div>
    </div>
  );
}

export default ProjectDetails;
