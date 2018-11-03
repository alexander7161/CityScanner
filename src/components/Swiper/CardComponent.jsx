import React from "react";
import MUCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";

const CardComponent = props => (
  <Link to={"/summary/" + props.item.To}>
    <MUCard
      style={{
        marginTop: "8px",
        height: "100%"

        // backgroundColor:
        //   props.swipeDirection === "left"
        //     ? "red"
        //     : props.swipeDirection === "right"
        //       ? "green"
        //       : "white"
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+1,000000+100&0+0,0.65+100 */
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
              height: "100%",
              width: "auto",
              zIndex: 0
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: 16,
            color: "white",
            zIndex: 3
          }}
        >
          <Typography
            style={{ color: "white", fontWeight: "bold" }}
            component="h2"
            variant="headline"
            gutterBottom
          >
            {props.item.To}, {props.item.MinPrice}€
          </Typography>
        </div>
      </div>
    </MUCard>
  </Link>
);

export default CardComponent;
