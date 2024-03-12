import React from "react";
import "./style/home.css";

const Home = () => {
  return (
    <div className="home-top">
      <div className="image-all">
        <img
          className="image-top"
          src="https://file.removal.ai/preview/a3c9b325-2e9f-41b4-9f48-0781174eb1dc-png-clipart-blue-sony-cordless-headphones-noise-cancelling-headphones-bluetooth-headset-wireless-sony-bluetooth-headset-bass-gadget-bluetooth-speaker.png"
          alt="images"
        />
        <p>
          Description
          <div className="des-line"></div>
          <p className="des-top">
            Get an edge on your rivals with Noise Cancellation
          </p>
          <span className="des-sub">
            Supercharge your sound and enhance your performance with the
            wireless INZONE H9 gaming headset. With 360 Spatial Sound for Gaming
            and next-level Noise Cancellation, you'll always be one step ahead,
            and a more comfortable design means you can play for longer.
          </span>
        </p>
      </div>
      <div className="home-text-top">
        <div className="home-title">Headphone</div>
        <h1 className="home-sub-title">Summar Offer</h1>
        <img
          className="offer-logo"
          src="https://file.removal.ai/preview/35632142-5bc4-4528-9c6a-2b6b399d15de-pngtree-50-off-png-images-png-image_4742993.png"
          alt="offer-logo"
        />
      </div>
    </div>
  );
};

export default Home;
