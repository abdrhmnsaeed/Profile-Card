import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML/CSS", level: "advanced", color: "orangered" },
  { skill: "JavaScript", level: "advanced", color: "yellow" },
  { skill: "Web Design", level: "advanced", color: "orange" },
  { skill: "Git and Github", level: "intermediate", color: "red" },
  { skill: "React", level: "beginner", color: "orangered" },
  { skill: "React Native", level: "intermediate", color: "orangered" },
  { skill: "Python", level: "advanced", color: "yellow" },
  { skill: "Django", level: "intermediate", color: "yellow" },
  { skill: "Node.js", level: "beginner", color: "yellow" },
  { skill: "Express", level: "beginner", color: "yellow" },
  { skill: "MongoDB", level: "intermediate", color: "yellow" },
  { skill: "MySQL", level: "advanced", color: "yellow" },
];

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

function SkillList() {
  const Allskill = skills;

  return (
    <div className="skill-list" color="#123456">
      {Allskill.map((skills) => (
        <Skill skillObj={skills} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ background: skillObj.color }}>
      {`${skillObj.skill} ${
        skillObj.level === "advanced"
          ? "💪"
          : "" || skillObj.level === "intermediate"
          ? "👍"
          : "" || skillObj.level === "beginner"
          ? "😏"
          : ""
      }`}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
