import React from "react";
import { ReactPictureGrid } from "react-picture-grid";
import { Fragment } from "react";

// import Back from "../assets/back.jpg";
import SubHeader from "./SubHeader";

let data = [];
for (let i = 1; i < 20; i++) {
  data.push({
    image: `images/img${i}.jpg`,
    title: `img${i}`,
    description: `img${i}`,
  });
}

// console.log(data);
const Pics = () => {
  return (
    <Fragment>
      <SubHeader>Pictures 🧚</SubHeader>

      <ReactPictureGrid
        showPreview
        closeOnClick
        data={data}
        gap={20}
        backDropColor={"rgba(54, 86, 138, 0.5)"}
        // showTitle
        pattern={[
          "big",
          "small",
          "small",
          "tall",
          "tall",

          "tall",
          "small",
          "big",
          "wide",
          "small",

          "tall",
          "tall",
          "big",
          "wide",
            "big",

            "big",
            "big",
            "big",
            "big",

        ]}
      />
    </Fragment>
  );
};

export default Pics;
