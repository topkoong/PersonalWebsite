import React from "react";

const Home = () => {
  return (
    <div className="row">
      <br />
      <div className="col s6">
        <img
          className="responsive-img"
          src="https://scontent.fewr1-4.fna.fbcdn.net/v/t1.0-9/23905307_10214400483021923_736847013313396028_n.jpg?oh=57b0787b633f1489463dc7c18f02a41c&oe=5B0E8B8E"
        />
      </div>
      <div className="col s6">
        {/* <div style={{ textAlign: "center" }}> */}
        <div className="row">
          <h5>Hi, I'm Theerut Foongkiatcharoen</h5>
        </div>
        <div className="row">
          <p>
            I'm a Syracuse, New York based Full Stack Web Developer, Software
            Engineer. I'm originally from Bangkok, Thailand and chiefly
            interested in modern technology. Also, I'm a grad student who has an
            eclectic taste in music and is passionate about action figure, RC
            car, coding, Internet of Things, and photography.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
