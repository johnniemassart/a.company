import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LogInOrSignUp = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const days = [
    { dateVal: 0, dateDay: "sunday" },
    { dateVal: 1, dateDay: "monday" },
    { dateVal: 2, dateDay: "tuesday" },
    { dateVal: 3, dateDay: "wednesday" },
    { dateVal: 4, dateDay: "thursday" },
    { dateVal: 5, dateDay: "friday" },
    { dateVal: 6, dateDay: "saturday" },
  ];
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);
  return (
    <div className="li_su_positioning">
      <p className="home_msg">founded, @2024.</p>
      <div className="li_su_wrapper">
        <div className="li_su_content_wrapper">
          <p className="welcome">welcome to,</p>
          <p className="welcome company_name">
            a.company
            <svg
              id="company_svg"
              viewBox="0 0 118 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 30C53.4063 15.0364 79.0683 1.51908 106 2.00001C112.514 2.11633 115.94 5.91392 115.778 12.5556C115.321 31.2878 99.4154 49.6836 86.7778 61.8889C68.0863 79.941 48.9027 94.7352 24.3333 103.444C19.8674 105.028 5.3782 110.927 2.88889 103C-1.20398 89.9675 4.69174 71.6411 9.66666 59.7778C15.448 45.9916 23.0694 34.8764 33 24"
                stroke="grey"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </p>
          {days.map(
            (day) =>
              currentDate.getDay() === day.dateVal && (
                <p key={day.dateVal} className="welcome home_day">
                  on a {day.dateDay} in milwaukee.
                </p>
              )
          )}
        </div>
        <div className="link_wrapper">
          <Link to="/login" className="link_btn">
            log in
          </Link>
          <Link to="/signup" className="link_btn">
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInOrSignUp;
