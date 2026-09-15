const POINTS = [
  {
    title: 'Who I Am',
    text: "I'm a software developer with experience building full-stack web applications using React.js and JavaScript on the frontend, and Python, Flask, Node.js and SQL on the backend.",
  },
  {
    title: 'What I Enjoy Building',
    text: 'I enjoy turning ideas into functional applications that solve real-world problems — from user interfaces and REST APIs to database-driven features and authentication.',
  },
  {
    title: 'My Software Engineering Journey',
    text: "I'm currently completing my software engineering studies, and through individual and collaborative projects I've gained practical experience integrating frontend and backend systems, debugging applications, and using Git and GitHub for version control.",
  },
];

const About = () => (
  <section id="about">
    <div className="container">
      <span className="section-kicker">About Me</span>
      <h2 className="section-title" style={{ marginBottom: 40 }}>
        Get To Know Me
      </h2>

      <div className="about-grid">
        {POINTS.map((point) => (
          <div className="about-point" key={point.title}>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
