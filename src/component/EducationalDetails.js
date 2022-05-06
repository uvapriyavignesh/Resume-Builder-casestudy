import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Purestring from "./Purestring";

function EducationalDetails(props) {
  let [value, setValue] = props.stateContainer;
  const history = useHistory();
  function onCLickHandlerEdu(event) {
    event.target.name === "university"
      ? setValue((ps) => ({ ...ps, university: event.target.value }))
      : event.target.name === "qualification"
      ? setValue((ps) => ({
          ...ps,
          universityQualification: event.target.value,
        }))
      : event.target.name === "startdate"
      ? setValue((ps) => ({ ...ps, universityStartdate: event.target.value }))
      : event.target.name === "enddate"
      ? setValue((ps) => ({ ...ps, universityEnddate: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({ ...ps, universityDescription: event.target.value }))
      : console.log("Error storing Education details");
  }
  function onCLickHandlerSch(event) {
    event.target.name === "school"
      ? setValue((ps) => ({ ...ps, school: event.target.value }))
      : event.target.name === "qualification"
      ? setValue((ps) => ({
          ...ps,
          schoolQualification: event.target.value,
        }))
      : event.target.name === "startdate"
      ? setValue((ps) => ({ ...ps, schoolStartdate: event.target.value }))
      : event.target.name === "enddate"
      ? setValue((ps) => ({ ...ps, schoolEnddate: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({ ...ps, schoolDescription: event.target.value }))
      : console.log("Error storing Education details");
  }
  function Back() {
    history.push("/");
  }

  function Validator() {
    value.university === "" ||
    value.university === undefined ||
    value.universityQualification === "" ||
    value.universityQualification === undefined ||
    value.universityStartdate === "" ||
    value.universityStartdate === undefined ||
    value.universityEnddate === "" ||
    value.universityEnddate === undefined ||
    value.universityDescription === "" ||
    value.universityDescription === undefined ||
    value.school === "" ||
    value.school === undefined ||
    value.schoolQualification === "" ||
    value.schoolQualification === undefined ||
    value.schoolStartdate === "" ||
    value.schoolStartdate === undefined ||
    value.schoolEnddate === "" ||
    value.schoolEnddate === undefined ||
    value.schoolDescription === "" ||
    value.schoolDescription === undefined
      ? alert(" All Field must be Filled")
      : Purestring(value.university, "university")
      ? console.log("university in valid")
      : Purestring(value.universityQualification, " universityQualification")
      ? console.log(" universityQualification in valid")
      : history.push("/project");
  }
  useEffect(() => {
    console.log(value);
  });
  return (
    <div>
      <div>
        <h3>Educational Details</h3>
      </div>
      <hr />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          <form>
            <div class="form-group row">
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="university"
                  value={value.university}
                  onChange={(e) => {
                    onCLickHandlerEdu(e);
                  }}
                  placeholder="University/College *"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="qualification"
                  placeholder="Qualification *"
                  value={value.universityQualification}
                  onChange={(e) => {
                    onCLickHandlerEdu(e);
                  }}
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-5">
              <form>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="date"
                      class="form-control"
                      name="startdate"
                      placeholder="start dd/mm/yy"
                      value={value.universityStartdate}
                      onChange={(e) => {
                        onCLickHandlerEdu(e);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-5">
              <form>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="date"
                      class="form-control"
                      name="enddate"
                      placeholder="end dd/mm/yyyy"
                      value={value.universityEnddate}
                      onChange={(e) => {
                        onCLickHandlerEdu(e);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="row">
              <div class="col-11">
                <form>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        name="description"
                        placeholder="description *"
                        value={value.universityDescription}
                        onChange={(e) => {
                          onCLickHandlerEdu(e);
                        }}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          <form>
            <div class="form-group row">
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="school"
                  value={value.school}
                  onChange={(e) => {
                    onCLickHandlerSch(e);
                  }}
                  placeholder="school *"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="qualification"
                  placeholder="Qualification *"
                  value={value.schoolQualification}
                  onChange={(e) => {
                    onCLickHandlerSch(e);
                  }}
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-5">
              <form>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="date"
                      class="form-control"
                      name="startdate"
                      placeholder="start dd/mm/yy"
                      value={value.schoolStartdate}
                      onChange={(e) => {
                        onCLickHandlerSch(e);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-5">
              <form>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="date"
                      class="form-control"
                      name="enddate"
                      placeholder="end dd/mm/yyyy"
                      value={value.schoolEnddate}
                      onChange={(e) => {
                        onCLickHandlerSch(e);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="row">
              <div class="col-11">
                <form>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        name="description"
                        placeholder="description *"
                        value={value.schoolDescription}
                        onChange={(e) => {
                          onCLickHandlerSch(e);
                        }}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row">
          <div class="col-5"></div>
          <div class="col-1">
            <button
              class="button"
              id="nxtbutton"
              type="button"
              onClick={() => {
                Back();
              }}
            >
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
        <Footer page={2} />
      </div>
    </div>
  );
}

export default EducationalDetails;
