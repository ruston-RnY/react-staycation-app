import React from "react";
import Button from "../elements/Button/Button";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4>Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, i) => (
          <div
            className={`item column-4 ${i === 0 ? " row-2" : " row-1"}`}
            key={i}
          >
            <div className="card card-featured">
              <div className="tag">
                ${item.price}{" "}
                <span className="font-weight-light">per {item.unit}</span>
              </div>
              <figure className="img-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="img-cover"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  href={`/properties/${item._id}`}
                  className="streched-link d-block text-white"
                >
                  {item.name}
                </Button>
                <span>
                  {item.city}, {item.country}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
