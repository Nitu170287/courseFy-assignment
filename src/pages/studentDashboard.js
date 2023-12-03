import { useDispatch, useSelector } from "react-redux";
import Header from "../components/common/Header";
import { useEffect } from "react";
import {
  postFetching,
  studentFetch,
  postFetcherror,
} from "../redux/actions/postAction";
import axios from "axios";

import EnrolledCourse from "../components/enrolledCourse";

const StudentDashboard = () => {
  const { loading, studentInfo, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postFetching());
    axios
      .get("https://demo9248381.mockable.io/student")

      .then((response) => {
        dispatch(studentFetch(response.data));
      })

      .catch((error) => {
        dispatch(postFetcherror(error.message));
      });
  }, []);

  return (
    <div>
      <Header />
      {studentInfo && (
        <div>
          <div className="course-detail">
            <span className="side-title">Name:</span> {studentInfo.name}
          </div>
          <div className="course-detail">
            <span className="side-title">My Courses:</span> <div className="student-courses">{studentInfo.courses && studentInfo.courses.map((course)=><EnrolledCourse course={course}/>)}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default StudentDashboard;
