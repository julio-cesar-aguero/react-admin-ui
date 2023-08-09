import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

export const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => {
              return (
                <Link to={listItem.url} className="listItem" key={listItem.id}>
                  <img src={listItem.icon} alt="" />
                  <span className="ListItemTitle">
                    {listItem.title}
                  </span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
