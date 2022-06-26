import React from "react";
import parse from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {parse(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((item, index) => {
          return (
            <div
              className="col-3"
              key={`IconDetail-${index}`}
              style={{ marginBottom: 20 }}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                width="38"
                className="d-block mb-2"
              />{" "}
              <span>{item.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
