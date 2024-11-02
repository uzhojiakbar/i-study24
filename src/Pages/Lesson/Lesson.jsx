import React from "react";
import { useParams } from "react-router-dom";
import Navigating from "../../Components/Navbar/Navbar";
import { useGetCourseWithId } from "../../Hooks/RegisterHook";

const Lesson = () => {
  const { lessonid } = useParams();

  const { data, error, isLoading } = useGetCourseWithId(lessonid);
  console.log(data);

  return (
    <div className="pt-[80px]">
      <Navigating />
      Lesson: {lessonid || 0}
    </div>
  );
};

export default Lesson;
