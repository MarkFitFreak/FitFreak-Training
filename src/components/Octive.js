import React from "react";
import './Octive.css';

export default function Octive() {
  return (
    <div className="bg-black">
      <div className="container card mt-1">
        <iframe
          src="https://app.octivfitness.com/widget/sign-up?publicToken=1178b5f4a3d99175ff2541ce77530ae1d34b0265"
          frameBorder="0"
          height="450px"
          width="100%"
        >
          {" "}
          Your browser does not support iframes{" "}
        </iframe>
      </div>

      <br></br>
      <div className="container card card-body mt-5">
        <h2 class="card-title text-center">Schedule</h2>
        <iframe
          src="https://app.octivfitness.com/widget/schedule?publicToken=1178b5f4a3d99175ff2541ce77530ae1d34b0265"
          frameBorder="0"
          height="400px"
          width="100%"
        >
          {" "}
          Your browser does not support iframes{" "}
        </iframe>
      </div>
    </div>
  );
}
