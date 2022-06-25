import React from "react";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
              key={`FeaturedImage-${index}`}
            >
              <div className="card">
                <figure className="img-wrapper">
                  <img src={item.url} alt="" className="img-cover" />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
