export default function ExperienceContainer({ experience }) {
  return (
    <div
      className={`d-flex flex-column flex-md-row justify-content-between mb-5`}
    >
      <div className={`flex-grow-1`}>
        <h3 className={`mb-0`}>{experience.title}</h3>
        <div className={`subheading mb-3`}>{experience.company}</div>
        <div>
          <p>{experience.description}</p>
          <br />
          {experience.links.map((link) => {
            var linkIcon = `fa-solid fa-globe`;
            if (link.isMobile) {
              linkIcon = `fa-solid fa-mobile`;
            }
            return (
              <div key={link.url}>
                <a
                  className={`text-decoration-none text-success`}
                  href={link.url}
                  target="_blank"
                >
                  <i className={linkIcon}></i> {link.name}
                </a>
                <br />
              </div>
            );
          })}
        </div>
      </div>

      <div className={`flex-shrink-0`}>
        <span className={`text-success`}>
          {experience.start} - {experience.end}
        </span>
      </div>
    </div>
  );
}
