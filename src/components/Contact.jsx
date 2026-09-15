const EMAIL = 'rispernjeri789@gmail.com';
const PHONE = '0718660597';
const GITHUB_URL = 'https://github.com/rispernjeri789-cyber';

const Contact = () => (
  <section id="contact">
    <div className="container contact-inner">
      <span className="section-kicker">Let's Work Together</span>
      <h2 className="section-title" style={{ marginBottom: 20 }}>
        Let's Build Something Great
      </h2>
      <p className="section-lead">
        I'm open to software development opportunities, collaborations,
        internships and freelance projects. If you'd like to work with me,
        feel free to get in touch.
      </p>

      <div className="contact-info">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={`tel:+254${PHONE.slice(1)}`}>{PHONE}</a>
      </div>

      <div className="contact-actions">
        <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
          Email Me
        </a>
        <a
          className="btn btn-secondary"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <span className="btn btn-secondary" style={{ opacity: 0.5, cursor: 'default' }}>
          LinkedIn — coming soon
        </span>
      </div>
    </div>
  </section>
);

export default Contact;
