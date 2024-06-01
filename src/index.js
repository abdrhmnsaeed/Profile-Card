import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar location="img/m5.jpg" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.location} alt={props.alt} />;
}

function Intro() {
  return (
    <div>
      <h2>IBN-SA'EED</h2>
      <p>
        I'm a software engineer with experience in addressing problems and
        thriving in fast-paced settings. Dedicated to completing projects
        quickly and accurately, Proud team player.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list" color="#123456">
      <Skill skill="HTML/CSS 💪" color="orangered" />
      <Skill skill="JavaScript 💪" color="yellow" />
      <Skill skill="Web Design 💪" color="orange" />
      <Skill skill="Git and Github 👍" color="red" />
      <Skill skill="React 💪" color="orangered" />
      <Skill skill="Svelte 👍" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      {props.skill}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
