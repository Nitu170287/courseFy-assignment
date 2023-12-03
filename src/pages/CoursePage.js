import { useDispatch, useSelector } from "react-redux";
import Header from "../components/common/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CoursePage = () => {
  const { loading, data, filteredData, error } = useSelector((state) => state);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [courseItem, setCourseItem] = useState();

  useEffect(() => {
    let course = data.find((d) => d.id == id);
    setCourseItem(course);
  }, []);

  return (
    <div>
      <Header />
      {courseItem && (
        <div>
          <div className="course-detail">
            <span>Course Name:</span> {courseItem.name}
          </div>
          <div className="course-detail">
            <span>Instructor's name:</span> {courseItem.instructor}
          </div>
          <div className="course-detail">
            <span>Description:</span> {courseItem.description}
          </div>
          <div className="course-detail">
            <span>Enrollment status:</span> {courseItem.enrollmentStatus}
          </div>
          <div className="course-detail">
            <span>Course duration:</span> {courseItem.duration}
          </div>
          <div className="course-detail">
            <span>Schedule:</span> {courseItem.schedule}
          </div>
          <div className="course-detail">
            <span>Location:</span> {courseItem.location}
          </div>
          <div className="course-detail">
            <span>Pre-requisites:</span> {courseItem.prerequisites}
          </div>
          <div className="course-detail">
            <span>Syllabus :</span>{" "}
            {courseItem.syllabus.map((syll) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{"week "+syll.week + " - "+ syll.topic}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {syll.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CoursePage;
