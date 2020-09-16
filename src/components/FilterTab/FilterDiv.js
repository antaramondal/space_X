import Axios from "axios";
import React, {useState } from "react";

function FilterDiv(props) {
  const years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  const status = ["True", "False"];
  let data = [];
  let heading = "";

  const [activeButton, setActiveButton] = useState("");

  if (props.type == "year") {
    data = years;
    heading = "Launch Year";
  } else if (props.type == "launch") {
    data = status;
    heading = "Successful Launch";
  } else {
    data = status;
    heading = "Successful Landing";
  }

  const filterSearch = (e) => {
    e.preventDefault();
    if (props.type == "year") {
        setActiveButton(e.target.value);
        props.getAPIData(props.type,e.target.value);
      } else if (props.type == "launch") {
        setActiveButton(e.target.value);
        props.getAPIData(props.type,e.target.value.toLowerCase());
      } else {
        setActiveButton(e.target.value);
        props.getAPIData(props.type,e.target.value.toLowerCase());
      }
    
  };


  return (
    <div className="filter-div">
      <div>{heading}</div>
      <hr />
      {data.map((value, index) => (
        <button
          className="filter-button"
          key={index}
          onClick={filterSearch}
          value={value}
          style={{backgroundColor: activeButton == value && "#82f108fc"}}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default FilterDiv;
