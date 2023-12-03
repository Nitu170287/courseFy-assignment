import Header from "../components/common/Header";
import React, { useEffect } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  postFetching,
  postFetchSuccess,
  postFetcherror,
  postFilter,
} from "../redux/actions/postAction";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const CourseList = () => {
  const { loading, data, filteredData, error } = useSelector((state) => state);
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postFetching());
    axios
      .get("https://demo9248381.mockable.io/courses")

      .then((response) => {
        dispatch(postFetchSuccess(response.data));
      })

      .catch((error) => {
        dispatch(postFetcherror(error.message));
      });
  }, []);

  const onChange = (e) => {
   
    let filterItems = data.filter(
      (d) =>
        d.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 ||
        d.instructor.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    );
    dispatch(postFilter(filterItems));
  };

  return (
    <div>
      <Header />
      <SearchBar  onChange={onChange} />
      <h1 className="courese-list-title">List Of Courses</h1>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>error</h1>
        ) : (
          filteredData &&
          filteredData.map((item, index) => (
            <Link to = {`/course/${item.id}`}>
            <div  className="course-list-item">
              <h2>{item.name}</h2>
              <spam>{item.instructor}</spam>
            </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default CourseList;
