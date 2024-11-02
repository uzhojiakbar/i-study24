import React, { useEffect, useState } from "react";
import Navigating from "../../Components/Navbar/Navbar";
import { MyCourse } from "./styled";
import { useGetCourse } from "../../Hooks/RegisterHook";

const Lessons = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: coursesdata } = useGetCourse();

  useEffect(() => {
    if (coursesdata) {
      setCourses(coursesdata);
      console.log(coursesdata);

      setLoading(false);
    }
  }, [coursesdata]);

  return (
    <div className="pt-[80px]">
      <Navigating login={1} />
      <div className="flex justify-center items-center h-[80vh]">
        <MyCourse>
          <MyCourse.Title>Kurslar</MyCourse.Title>
          <MyCourse.Courses>
            {courses?.map((v) => {
              return (
                <MyCourse.Card to={`/lesson/${v.id}`} key={v.id}>
                  <MyCourse.Icon>🖥️</MyCourse.Icon>
                  <MyCourse.Name>{v?.title}</MyCourse.Name>
                  <MyCourse.Desc>{v?.description}</MyCourse.Desc>
                </MyCourse.Card>
              );
            })}
          </MyCourse.Courses>
        </MyCourse>
      </div>
      {loading ? (
        <div className="loaderWindow">
          <div className="loader"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Lessons;
