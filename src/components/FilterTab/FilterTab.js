import React, { useState, useEffect } from "react";
import FilterHeader from "./FilterHeader";
import FilterDiv from "./FilterDiv";
import axios from "axios";

function FilterTab(props) {
  const [year, setYear] = useState(0);
  const [launch, setLaunch] = useState("");
  const [land, setLand] = useState("");

  const getAPIData = (type, value) => {
      if (type == "year") {
      setYear(value);
    } else if (type == "launch") {
      setLaunch(value);
    } else {
      setLand(value);
    }
  };

  useEffect(() => {
    if (year != 0||land!=""||launch!="") {
      axios
        .get(
          `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`
        )
        .then((res) => props.updateSearchData(res.data));
    }
  }, [year, launch, land]);

  return (
    <div className={props.device==="isDesktopOrLaptop"?"filter-tab-desktop":"filter-tab"}>
      <FilterHeader />
      <FilterDiv type="year" getAPIData={getAPIData} />
      <FilterDiv type="launch" getAPIData={getAPIData} />
      <FilterDiv type="landing" getAPIData={getAPIData} />
    </div>
  );
}

export default FilterTab;
