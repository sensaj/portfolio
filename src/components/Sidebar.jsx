import profileUrl from "../assets/developer.jpg";
export default function Sidebar() {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-success fixed-top`}
        id={`sideNav`}
      >
        <a className={`navbar-brand js-scroll-trigger`}>
          <span className="d-block d-lg-none">Jafar Salum</span>

          <span className={`d-none d-lg-block`}>
            <img
              className={`img-fluid img-profile rounded mx-auto mb-2`}
              width="150"
              height="150"
              src={profileUrl}
              alt="..."
            />
          </span>
        </a>
        <button
          className={`navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon`}></span>
        </button>
        <div className={`collapse navbar-collapse`} id={`navbarResponsive`}>
          <ul className={`navbar-nav`}>
            <li className={`nav-item`}>
              <a className={`nav-link js-scroll-trigger`} href="#about">
                About
              </a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link js-scroll-trigger`} href="#experience">
                Experience
              </a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link js-scroll-trigger`} href="#education">
                Education
              </a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link js-scroll-trigger`} href="#skills">
                Skills
              </a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link js-scroll-trigger`} href="#interests">
                Interests
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
