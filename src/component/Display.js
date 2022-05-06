import React from "react";

function Display(props) {
  const [value, setValue] = props.stateContainer;
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>First name</td>
            <td>{value.firstname}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Last name</td>
            <td>{value.lastname}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Email</td>
            <td>{value.email}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Phone Number</td>
            <td>{value.phonenumber}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Your Website</td>
            <td>{value.yourwebsite}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Git Hub</td>
            <td>{value.github}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Linked In</td>
            <td>{value.linkedin}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Twitter</td>
            <td>{value.twitter}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Face Book</td>
            <td>{value.facebook}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Instagram</td>
            <td>{value.insta}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colspan="2" class="dtitle">
              <b>Education details</b>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>University</td>
            <td>{value.university}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Qualification</td>
            <td>{value.universityQualification}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Start Date</td>
            <td>{value.universityStartdate}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>End Date</td>
            <td>{value.universityEnddate}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Description</td>
            <td>{value.universityDescription}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colspan="2" class="dtitle">
              <b>School Details</b>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>School</td>
            <td>{value.school}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>School Qualification</td>
            <td>{value.schoolQualification}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Start Date</td>
            <td>{value.schoolStartdate}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>End Date</td>
            <td>{value.schoolEnddate}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Description</td>
            <td>{value.schoolDescription}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colspan="2" class="dtitle">
              <b>Project 1</b>
            </td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Project Title</td>
            <td>{value.projectTitle}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Project Discription</td>
            <td>{value.projectDiscription}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Project Link</td>
            <td>{value.projectLink}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colspan="2" class="dtitle">
              <b>Project 2</b>
            </td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Project Title</td>
            <td>{value.Project1Title}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Project Discription</td>
            <td>{value.Project1Discription}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Project Link</td>
            <td>{value.Project1Link}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colspan="2" class="dtitle">
              <b>Experience 1</b>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Institude</td>
            <td>{value.experienceInstitude}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Position</td>
            <td>{value.experiencePosition}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Description</td>
            <td>{value.experienceDescription}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Duration</td>
            <td>{value.experienceDuration}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colspan="2" class="dtitle">
              <b>Experience 2</b>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Institude</td>
            <td>{value.Experience1Institude}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Position</td>
            <td>{value.Experience1Position}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Description</td>
            <td>{value.Experience1Description}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Duration</td>
            <td>{value.Experience1Duration}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colspan="2" class="dtitle">
              <b>Skills</b>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Skill 1</td>
            <td>{value.skill1}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Skill 2</td>
            <td>{value.skill2}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Skill 3</td>
            <td>{value.skill3}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Skill 4</td>
            <td>{value.skill4}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Skill 5</td>
            <td>{value.skill5}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Skill 6</td>
            <td>{value.skill6}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colspan="2" class="dtitle">
              <b>Intrest</b>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Intrest 1</td>
            <td>{value.intrest1}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Intrest 2</td>
            <td>{value.intrest2}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Intrest 3</td>
            <td>{value.intrest3}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Intrest 4</td>
            <td>{value.intrest4}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Intrest 5</td>
            <td>{value.intrest5}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Intrest 6</td>
            <td>{value.intrest6}</td>
          </tr>
        </tbody>
      </table>
      <h1 class="thank">
        <b>Thank You!!!!</b>
      </h1>
    </div>
  );
}

export default Display;
