import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faPersonSwimming,
  faStar,
  faGolfBall,
  faDumbbell,
  faGun,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { useDispatch } from "react-redux"
import { dataAction } from "./Action/Action";
import { AppContext } from "./ContextApi/ContextProvider";

const Navbar = () => {
  const { event,setEvent } = useContext(AppContext);
  const dispatch = useDispatch();
  
console.log(event)
  return (
    <div>
      <div className="icons_div">
        <div
          style={{ background: event === "featured" ? "#545353" : "#303030" }}
          className="icon_background"
          tabIndex={1}
          onClick={(e) => {
            setEvent("featured");
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            size="2x"
            style={{
              color: "#bfbfbf",
            }}
          />
          <p>Featured</p>
        </div>
        <div
          style={{ background: event === "Aquatics" ? "#545353" : "#303030" }}
          className="icon_background"
          tabIndex={1}
          onClick={(e) => {
            setEvent("Aquatics");
          }}
        >
          <FontAwesomeIcon
            icon={faPersonSwimming}
            size="2x"
            style={{
              color: "#bfbfbf",
            }}
          />
          <p>Aquatics</p>
        </div>
        <div
          style={{ background: event === "cycling" ? "#545353" : "#303030" }}
          className="icon_background"
          tabIndex={2}
          onClick={(e) => {
            setEvent("cycling");
          }}
        >
          <FontAwesomeIcon
            icon={faPersonBiking}
            size="2x"
            style={{
              color: "#bfbfbf",
            }}
          />
          <p>cycling</p>
        </div>
        <div
          style={{ background: event === "Golf" ? "#545353" : "#303030" }}
          className="icon_background"
          tabIndex={2}
          onClick={(e) => {
            setEvent("Golf");
          }}
        >
          <FontAwesomeIcon
            icon={faGolfBall}
            size="2x"
            style={{
              color: "#bfbfbf",
            }}
          />
          <p>Golf</p>
        </div>
        <div
          style={{ background: event === "Gymnastic" ? "#545353" : "#303030" }}
          className="icon_background"
          tabIndex={2}
          onClick={(e) => {
            setEvent("Gymnastic");
          }}
        >
          <FontAwesomeIcon
            icon={faDumbbell}
            size="2x"
            style={{
              color: "#bfbfbf",
            }}
          />
          <p>Gymnastic</p>
        </div>
        <div
          style={{ background: event === "Armory" ? "#545353" : "#303030" }}
          className="icon_background"
          tabIndex={2}
          onClick={(e) => {
            setEvent("Armory");
          }}
        >
          <FontAwesomeIcon
            icon={faGun}
            size="2x"
            style={{
              color: "#bfbfbf",
            }}
          />
          <p>Armory</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
