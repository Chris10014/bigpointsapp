import React from "react";
import { Glyphicon } from "./Glyphicon";
import * as Colors from "./Colors";

/**
 * Component for loading content. Default switches the loader icon randomly between four sport icons
 * for swimming, running, walking and biking
 * @param {className=str} className for e.g. animation, optional
 * @param {icon=str} string for glyphicon, optional
 * @param {size=str} size of the glyphicon (lg, sm, 2x ...), optional
 * @param {color=str} color of the glyphicon (hex, ...), optional
 * @returns Loading component with glyphicon
 */

export const Loading = (props) => {

  const sports = ["bike", "swi", "run", "walk"];
  const colors = [Colors.BIKING_COLOR, Colors.SWIMMING_COLOR, Colors.RUNNING_COLOR, Colors.RUNNING_COLOR];

  function getRandomSport() {
    const randomIndex = Math.floor(Math.random() * sports.length);
    return { sport: sports[randomIndex], color: colors[randomIndex] };
  }
  const randomSport = getRandomSport();
  const icon = props.icon ? props.icon : randomSport.sport;
  const color = props.color ? props.color : randomSport.color;
  const size = props.size ? props.size : "200px";
  const className = props.className ? props.className : "fa-beat";


    return (
      <div className="text-center mt-3">
        <Glyphicon className={`${className} mt-5`} icon={icon} color={color} size={size} />
        <h4 className="mt-5">{props.text ? props.text : "Inhalte werden geladen ..."}</h4>
      </div>
    );
};