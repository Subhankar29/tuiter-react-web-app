import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState({ text: "" });
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
      dispatch({ type: "create-tuit", tuit: whatsHappening.text });
    };


  return (
    <div
      className="mt-2 form-group d-flex flex-row  align-item-start justify-content-start"
      style={{ width: "100%" }}
    >
      <div className="mt-1">
        <img
          className="rounded-circle wd-img wd-img-width-all"
          style={{ borderRadius: "24px" }}
          src="https://www.kindpng.com/picc/m/180-1801331_elon-musk-tesla-motors-chief-executive-spacex-neuralink.png"
          width="50px"
          height="50px"
         alt={"123"}/>
      </div>
      <div style={{ width: "100%" }}>
        <textarea
          className="form-control ps-2"
          value={whatsHappening.text}
          style={{ fontSize: "15px",color: "black",borderBottom: "1px solid rgb(47, 51, 54)",
          }}
          onChange={(event) => {
            setWhatsHappening({ text: event.target.value });
          }}
          placeholder="What's Happening?"
        ></textarea>
        <div>
          <i className="my-2 pt-1 mx-2 fa fa-image wd-color"
          ></i>
          <i className="my-auto mx-2 fa fa-chart-line wd-color"
          ></i>
          <i className="my-auto mx-2 fa fa-smile wd-color"
          ></i>
          <i className="my-auto mx-2 fa fa-calendar wd-color"
          ></i>
          <button
            className="btn btn-primary float-end m-2"
            style={{ borderRadius: "24px" }}
            onClick={tuitClickHandler}>Tuit</button>
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;