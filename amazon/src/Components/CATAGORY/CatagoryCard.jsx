import React from "react";
import Classes from "./catagory.module.css";
import {Link} from 'react-router-dom'
const CatagoryCard = ({ data }) => {
  return (
    <div className={Classes.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <div className={Classes.imgLinks}>
          <div className={Classes.imgLink_Group}>
            <div>
              <img src={data.imgLink.first} alt="" />
              <span>{data.imgLink.f_Desc}</span>
            </div>
            <div>
              <img src={data.imgLink.second} alt="" />
              <span>{data.imgLink.s_Desc}</span>
            </div>
          </div>
          <div className={Classes.imgLink_Group}>
            <div>
              <img src={data.imgLink.third} alt="" />
              <span>{data.imgLink.t_Desc}</span>
            </div>

            <div>
              <img src={data.imgLink.fourth} alt="" />
              <span>{data.imgLink.l_Desc}</span>
            </div>
          </div>
        </div>
        <p>{data.show}</p>
      </Link>
    </div>
  );
};

export default CatagoryCard;
