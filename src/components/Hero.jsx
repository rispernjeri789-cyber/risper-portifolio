import profilePhoto from '../assets/profile.jpg';

const STACK = [
  'React.js',
  'JavaScript',
  'Python',
  'Flask',
  'Node.js',
  'SQL',
  'Git/GitHub',
];

const Hero = () => (
  <section id="home" className="hero">
    <div className="container hero-inner">
      <img className="hero-avatar" src={profilePhoto} alt="Risper Njeri" />

      <p className="hero-kicker">Hi, I'm</p>
      <h1>RISPER NJERI</h1>
      <p className="hero-role">Full-Stack Software Developer</p>
      <p className="hero-lead">
        I build responsive, user-friendly and practical web applications
        using modern frontend and backend technologies.
      </p>

      <div className="hero-stack">
        {STACK.map((item) => (
          <span className="pill" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          View Projects
        </a>
        <a
          className="btn btn-secondary"
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
