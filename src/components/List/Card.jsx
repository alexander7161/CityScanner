import React from "react";
import MUCard from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const CardComponent = props => (
  <Link to={"/summary/" + props.item.id}>
    <MUCard
      style={{
        marginTop: "8px",
        marginRight: "8px",
        marginLeft: "8px",
        height: "100px"
      }}
    >
      <div style={{ position: "relative", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            height: "100%",
            background: "rgb(0,0,0)",
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 61%, rgba(9,9,121,0) 100%)",
            zIndex: 2,
            width: "100%"
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%"
          }}
        >
          <img
            src={props.item.Photo}
            style={{
              width: "100%",
              width: "auto",
              zIndex: 0
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 4,
            left: 16,
            color: "white",
            zIndex: 3
          }}
        >
          <Typography
            style={{ color: "white", fontWeight: "bold" }}
            variant="h5"
            gutterBottom
          >
            {props.item.To}, {props.item.MinPrice}€
          </Typography>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 16,
            color: "white",
            zIndex: 3
          }}
        >
          <Typography
            style={{ color: "white", fontWeight: "bold" }}
            variant="subtitle1"
            gutterBottom
          >
            {props.item.date}
          </Typography>
        </div>
      </div>
    </MUCard>
  </Link>
);

export default CardComponent;
