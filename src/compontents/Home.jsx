import React from "react";
import "./style/home.css";

const Home = () => {
  return (
    <div>
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
              wireless INZONE H9 gaming headset. With 360 Spatial Sound for
              Gaming and next-level Noise Cancellation, you'll always be one
              step ahead, and a more comfortable design means you can play for
              longer.
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
      <div className="home-main">
        <span>
          <img
            src="https://file.removal.ai/preview/478607af-5eb0-4144-9cd1-c900c80d5747-png-clipart-black-sony-wireless-headphones-sony-mdr-v6-headphones-microphone-bluetooth-wireless-sony-headphones-industrial-music-headphones.png"
            alt="het-1"
          />
          <p className="title-1">Stunning sound and longer battery life</p>
          <p className="title-2">WH-CH520</p>
          <p className="title-3">
            Enjoy high sound quality all day long. The WH-CH520 headphones with
            up to 50 hours of battery life, stable connectivity, and enhanced
            call performance, meet the demands of your day.
          </p>
        </span>

        <span>
          <img
            src="https://file.removal.ai/preview/478607af-5eb0-4144-9cd1-c900c80d5747-png-clipart-black-sony-wireless-headphones-sony-mdr-v6-headphones-microphone-bluetooth-wireless-sony-headphones-industrial-music-headphones.png"
            alt="het-1"
          />
          <p className="sony-1">sony-1</p>
        </span>
        <span>
          <img
            src="https://file.removal.ai/preview/478607af-5eb0-4144-9cd1-c900c80d5747-png-clipart-black-sony-wireless-headphones-sony-mdr-v6-headphones-microphone-bluetooth-wireless-sony-headphones-industrial-music-headphones.png"
            alt="het-1"
          />
          <p className="sony-1">sony-1</p>
        </span>
      </div>
    </div>
  );
};

export default Home;
