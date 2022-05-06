import React from "react";

function Footer(props) {
  return (
    <div>
      <hr />
      <div class="row">
        <div class="col-6"></div>
        <div class="col-1">page {props.page}</div>
        <div class="col-5"></div>
      </div>
    </div>
  );
}

export default Footer;
