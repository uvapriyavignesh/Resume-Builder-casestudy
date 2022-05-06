import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Purestring from "./Purestring";

function ExtraDetail(props) {
  const [value, setValue] = props.stateContainer;
  const history = useHistory();
  function onChangeHandlerSkill(event) {
    event.target.name === "skill1"
      ? setValue((ps) => ({ ...ps, skill1: event.target.value }))
      : event.target.name === "skill2"
      ? setValue((ps) => ({ ...ps, skill2: event.target.value }))
      : event.target.name === "skill3"
      ? setValue((ps) => ({ ...ps, skill3: event.target.value }))
      : event.target.name === "skill4"
      ? setValue((ps) => ({ ...ps, skill4: event.target.value }))
      : event.target.name === "skill5"
      ? setValue((ps) => ({ ...ps, skill5: event.target.value }))
      : event.target.name === "skill6"
      ? setValue((ps) => ({ ...ps, skill6: event.target.value }))
      : console.log("Error in skill");
  }
  function onChangeHandlerintrest(event) {
    event.target.name === "intrest1"
      ? setValue((ps) => ({ ...ps, intrest1: event.target.value }))
      : event.target.name === "intrest2"
      ? setValue((ps) => ({ ...ps, intrest2: event.target.value }))
      : event.target.name === "intrest3"
      ? setValue((ps) => ({ ...ps, intrest3: event.target.value }))
      : event.target.name === "intrest4"
      ? setValue((ps) => ({ ...ps, intrest4: event.target.value }))
      : event.target.name === "intrest5"
      ? setValue((ps) => ({ ...ps, intrest5: event.target.value }))
      : event.target.name === "intrest6"
      ? setValue((ps) => ({ ...ps, intrest6: event.target.value }))
      : console.log("Error in intrest");
  }
  useEffect(() => {
    console.log(value);
  });
  function Validator() {
    value.skill1 === "" ||
    value.skill1 === undefined ||
    value.skill2 === "" ||
    value.skill2 === undefined ||
    value.skill3 === "" ||
    value.skill3 === undefined ||
    value.skill4 === "" ||
    value.skill4 === undefined ||
    value.skill5 === "" ||
    value.skill5 === undefined ||
    value.skill6 === "" ||
    value.skill6 === undefined ||
    value.intrest6 === "" ||
    value.intrest6 === undefined ||
    value.intrest5 === "" ||
    value.intrest5 === undefined ||
    value.intrest4 === "" ||
    value.intrest4 === undefined ||
    value.intrest3 === "" ||
    value.intrest3 === undefined ||
    value.intrest2 === "" ||
    value.intrest2 === undefined ||
    value.intrest1 === "" ||
    value.intrest1 === undefined
      ? alert(" All Field must be Filled")
      : history.push("/display");
  }
  function Back() {
    history.push("/experience");
  }
  return (
    <div>
      <div>
        <h3>Extra Details</h3>
      </div>
      <hr />
      <h4>Skills/Languages</h4>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="skill1"
            value={value.skill1}
            onChange={(e) => {
              onChangeHandlerSkill(e);
            }}
            placeholder="skill 1"
            required
          />
        </div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="skill2"
            value={value.skill2}
            onChange={(e) => {
              onChangeHandlerSkill(e);
            }}
            placeholder="skill 2"
            required
          />
        </div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="skill3"
            value={value.skill3}
            onChange={(e) => {
              onChangeHandlerSkill(e);
            }}
            placeholder="skill 3"
            required
          />
        </div>
        <div class="col-1"></div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
            <input
              type="text"
              class="form-control"
              name="skill4"
              value={value.skill4}
              onChange={(e) => {
                onChangeHandlerSkill(e);
              }}
              placeholder="skill 4"
              required
            />
          </div>
          <div class="col-3">
            <input
              type="text"
              class="form-control"
              name="skill5"
              value={value.skill5}
              onChange={(e) => {
                onChangeHandlerSkill(e);
              }}
              placeholder="skill 5"
              required
            />
          </div>
          <div class="col-3">
            <input
              type="text"
              class="form-control"
              name="skill6"
              value={value.skill6}
              onChange={(e) => {
                onChangeHandlerSkill(e);
              }}
              placeholder="skill 6"
              required
            />
          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <hr />
      <div class="row">
        <h4>intrests/Languages</h4>
        <div class="col-1"></div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="intrest1"
            value={value.intrest1}
            onChange={(e) => {
              onChangeHandlerintrest(e);
            }}
            placeholder="intrest 1"
            required
          />
        </div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="intrest2"
            value={value.intrest2}
            onChange={(e) => {
              onChangeHandlerintrest(e);
            }}
            placeholder="intrest 2"
            required
          />
        </div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="intrest3"
            value={value.intrest3}
            onChange={(e) => {
              onChangeHandlerintrest(e);
            }}
            placeholder="intrest 3"
            required
          />
        </div>
        <div class="col-1"></div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
            <input
              type="text"
              class="form-control"
              name="intrest4"
              value={value.intrest4}
              onChange={(e) => {
                onChangeHandlerintrest(e);
              }}
              placeholder="intrest 4"
              required
            />
          </div>
          <div class="col-3">
            <input
              type="text"
              class="form-control"
              name="intrest5"
              value={value.intrest5}
              onChange={(e) => {
                onChangeHandlerintrest(e);
              }}
              placeholder="intrest 5"
              required
            />
          </div>
          <div class="col-3">
            <input
              type="text"
              class="form-control"
              name="intrest6"
              value={value.intrest6}
              onChange={(e) => {
                onChangeHandlerintrest(e);
              }}
              placeholder="intrest 6"
              required
            />
          </div>
          <div class="col-1"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-5"></div>
        <div class="col-1">
          <button class="button" id="nxtbutton" type="button" onClick={Back}>
            {"<"}Back
          </button>
        </div>
        <div class="col-1">
          <button
            class="button"
            id="nxtbutton"
            type="button"
            onClick={Validator}
          >
            Next{">"}
          </button>
          <p> </p>
          <br />
        </div>
        <div class="col-5"></div>
      </div>
      <Footer page={5} />
    </div>
  );
}

export default ExtraDetail;
