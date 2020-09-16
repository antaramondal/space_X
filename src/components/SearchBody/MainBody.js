import React, { useState, useEffect } from "react";
import SearchItem from "./SearchItem";

function MainBody(props) {
  const [results, setResults] = useState(props.data);

  useEffect(() => {
    setResults(props.data);
  }, [props.data]);

  return (
    <div className={props.device==="isDesktopOrLaptop"?"main-body-desktop":props.device === "isTablet" ? 'main-body-tablet':"main-body"}>
      {results.map((result, index) => (
        <SearchItem device={props.device} key={index} result={result} />
      ))}
    </div>
  );
}

export default MainBody;
