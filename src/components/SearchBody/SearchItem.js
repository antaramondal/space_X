import React from "react";

function SearchItem(props) {
  const data = props.result;
  return (
    <div className={props.device==="isDesktopOrLaptop" ?"item-card-desktop": "item-card"}>
      <div className="img-div">
        <img src={data.links.mission_patch_small} className="img-tag" />
      </div>
      <div className="data-div">
        <span className="data-name">
          {data.mission_name} #{data.flight_number}
        </span>
        <span>
          <b> Mission Ids: </b>
          {data.mission_id.length>1&&
          <ul>
            {data.mission_id.map((id, index) => (
              <li key={index}>{id}</li>
            ))}
          </ul>}
        </span>
        <span>
          <b>Launch Year: </b> {data.launch_year}
        </span>
        <span>
          <b>Successful Launch: </b> {String(data.launch_success)}
        </span>
        <span>
          <b>Successful Landing : </b> {String(data.launch_success)}
        </span>
      </div>
    </div>
  );
}

export default SearchItem;
