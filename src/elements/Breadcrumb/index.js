import React from "react";
import "./index.scss";
import propTypes from "prop-types";
import Button from "../../elements/Button/Button";

export default function Breadcrumb(props) {
  console.log(props.data);
  return (
    // <nav aria-label="breadcrumb">
    //   <ol className="breadcrumb">
    //     {props.data.map((item, index) => {
    //       return (
    //         <li
    //           key={`breadcrumb-${index}`}
    //           className={`breadcrumb-item${
    //             index === props.data.length - 1 ? "active" : ""
    //           }`}
    //         >
    //           {index === props.data.length - 1 ? (
    //             item.pageTitle
    //           ) : (
    //             <Button type="link" href={item.pageHref}>
    //               {item.pageTitle}
    //             </Button>
    //           )}
    //         </li>
    //       );
    //     })}
    //   </ol>
    // </nav>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {props.data.map((item, index) => {
          return (
            <li
              className={`breadcrumb-item ${
                index === props.data.length - 1 ? "active" : ""
              }`}
              key={`breadcrumb-${index}`}
            >
              <Button type="link" href={item.pageHref}>
                {item.pageTitle}{" "}
              </Button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
