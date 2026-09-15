import screenshot from '../assets/vehicle-rental-screenshot.png';

const GITHUB_URL = 'https://github.com/rispernjeri789-cyber';
const LIVE_DEMO_URL = 'https://car-rental-management-system-six.vercel.app/';

const FEATURES = [
  'Customer registration and login',
  'Vehicle search and filtering',
  'Pickup and return dates',
  'Vehicle availability and details',
  'Date-range booking',
  'Booking history and modification',
  'Customer profile & license info',
  'Staff/admin functionality',
  'Rental confirmation',
  'Payment and receipt functionality',
];

const TECH = ['React.js', 'JavaScript', 'Python', 'Flask', 'SQL', 'REST APIs', 'Git', 'GitHub'];

const FeaturedProject = () => (
  <section id="projects">
    <div className="container">
      <span className="section-kicker">Featured Project</span>
      <h2 className="section-title" style={{ marginBottom: 40 }}>
        Vehicle Rental Management System
      </h2>

      <div className="card featured-project">
        <a
          className="featured-shot"
          href={LIVE_DEMO_URL}
          target="_blank"
          rel="noreferrer"
        >
          <div className="featured-shot-bar">
            <span />
            <span />
            <span />
          </div>
          <img
            className="featured-shot-img"
            src={screenshot}
            alt="Vehicle Rental Management System live demo screenshot"
          />
        </a>

        <div className="featured-content">
          <p className="project-summary">
            A web-based vehicle rental application designed to make it
            easier for customers to search for vehicles, check availability
            and manage their bookings. The system also provides
            functionality for staff to manage vehicles, trips and customer
            bookings.
          </p>

          <ul className="project-features">
            {FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="project-tech">
            {TECH.map((tech) => (
              <span className="pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="project-links">
            <a
              className="btn btn-primary"
              href={LIVE_DEMO_URL}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              className="btn btn-secondary"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProject;
