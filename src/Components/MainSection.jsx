import React, { useState, useEffect } from "react";
import axios from "axios";

const MainSection = (props) => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/assets/content.json");
      setData(result.data);
    };
    fetchData();
  }, []);

  if (!data[0]) {
    return <h1>...Loading</h1>;
  } else {
    return (
      <div className="col wrapper justify-content-center mx-auto mt-2 pt-1">
        <div className="row">
          {/* Column left */}
          {/* Left image */}
          <div className="col-xl-7 p-2 m-0">
            <div className="caption caption-left">
              <button className="tag mb-4" id={data[0].tags[0]}>
                {data[0].tags[0].toUpperCase()}
              </button>
              <button className="tag" id={data[1].tags[0]}>
                {data[0].tags[1].toUpperCase()}
              </button>
   
              <p>{data[0].title}</p>
            </div>
            <div className="outer main-left">
              <div className="inner thumbnail text-left main-left">
                <img className="img img-left" src={data[0].image} alt="logo" />
              </div>
            </div>
          </div>
          {/* Column right */}
          {/* Top right image */}
          <div className="col-xl-5 p-2 m-0">
            <div className="row pt-0 m-0">
              <div className="caption caption-right-top">
                <button className="tag mb-3" id={data[1].tags[0]}>
                  {data[1].tags[0].toUpperCase()}
                </button>
                <p>{data[1].title}</p>
              </div>
              <div className="outer right-top">
                <div className="inner right-top">
                  <img
                    className="img img-right-top"
                    src={data[2].image}
                    alt="article"
                  />
                </div>
              </div>
            </div>
            {/* Bottom right image */}
            <div className="row pt-3 m-0">
              <div className="caption-right-bottom">
                <button className="tag mb-3" id="health">
                  {data[2].tags[0].toUpperCase()}
                </button>
                <p>{data[2].title}</p>
              </div>
              <div className="outer-red right-bottom">
                <div className="inner right-bottom">
                  <img
                    className="img img-right-bottom"
                    src={data[1].image}
                    alt="article"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainSection;
