import React, { useState } from "react";
import { BrowserRouter as Br, Link, Route } from "react-router-dom";
import Personaldetails from "./component/Personaldetails";
import EducationalDetails from "./component/EducationalDetails";
import ProjectDetails from "./component/ProjectDetails";
import ExperienceDetails from "./component/ExperienceDetails";
import ExtraDetail from "./component/ExtraDetail";
import Display from "./component/Display";

function Routing() {
  const [value, setValue] = useState({});
  return (
    <div>
      <Br>
        <div>
          <Route exact path="/">
            <Personaldetails stateContainer={[value, setValue]} />
          </Route>
          <Route path="/education">
            <EducationalDetails stateContainer={[value, setValue]} />
          </Route>
          <Route path="/project">
            <ProjectDetails stateContainer={[value, setValue]} />
          </Route>
          <Route path="/experience">
            <ExperienceDetails stateContainer={[value, setValue]} />
          </Route>
          <Route path="/extra">
            <ExtraDetail stateContainer={[value, setValue]} />
          </Route>
          <Route path="/display">
            <Display stateContainer={[value, setValue]} />
          </Route>
        </div>
      </Br>
    </div>
  );
}

export default Routing;
