import React, { useEffect, useState } from "react";
import db from "../data/Mock.json";
import "./Box.scss";
import {getSearch} from "../../src/utils/getSearch";
function Box({ isSearchEnabled, searchValue }) {
  const [data, setData] = useState(db);

  useEffect(() => {
    if (isSearchEnabled) {
      const filteredData = getSearch( searchValue);
      setData(filteredData);
      console.log(filteredData);
      
    }else{
      setData(getSearch(searchValue));
    }
  }, [searchValue]);

  
  return (
    <>
      <div className="boxes">
        {data.map((e) => {
          return (
            <div key={e.id}>
              <div className="box">
                <img src={e.img} alt="" className="imgca" />
                <div className="hash">
                  <h3>{e.name}</h3>
                  <h4>₹{e.price}</h4>
                </div>

                <p>{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Box;
