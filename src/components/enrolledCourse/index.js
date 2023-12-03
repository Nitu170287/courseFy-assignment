import CircularWithValueLabel from "../progressBar";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { useState } from "react";
import "./style.css";

const EnrolledCourse = ({ course }) => {
  const [percentCompleted, setPercentCompleted] = useState(
    course.percentComplete
  );
  const [completed, setCompleted] = useState(percentCompleted === 100);

  return (
    <div className="courses-card">
      <img src={course.thumbnail} />
      <div className="courses-card-bottom">
      <h2>{course.name}</h2>
      <h4>{course.instructor}</h4>

      <div>{course.duedate}</div>
      <div className="progress-bar-markcom-btn">
        <CircularWithValueLabel value={percentCompleted} />
        <div
          onClick={() => {
            if (!completed) {
              setCompleted(true);
              setPercentCompleted(100);
            }
          }}
        >
          {completed ? (
            <div className="complete-icon-text">
              <CheckCircleTwoToneIcon />
              <p>Completed</p>
            </div>
          ) : (
            <div className="inComplete-icon-text">
              <CheckCircleOutlineTwoToneIcon />
              <p>Mark Complete</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default EnrolledCourse;
