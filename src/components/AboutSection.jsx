import profileUrl from "../assets/developer.jpg";
import info from "../assets/about.json";
import SocialIconContainer from "./SocialIconContainer";
export default function AboutSection() {
  return (
    <section className={`container`} id={`about`}>
      <div className={`col-8 mx-auto`}>
        <span className={`d-sm-none`}>
          <img
            className={`img-fluid img-profile rounded mx-auto mb-2`}
            src={profileUrl}
            alt="..."
          />
        </span>
      </div>
      <div className={`container`}>
        <h1 className={`mb-0 text-center`}>
          {info.firstName}
          <span className={`text-success mx-3`}>{info.middleName}</span>
          {info.lastName}
        </h1>
        <div className={`subheading mb-5`}>
          {info.address} · {info.region}, {info.country} · {info.phone} ·
          <a href={`mailto:${info.email}`} className={`text-success`}>
            {info.email}
          </a>
        </div>
        <p className={`lead mb-5`}>{info.biography}</p>
        <div className={`social-icons mb-3`}>
          {info.socials.map((social) => {
            return <SocialIconContainer key={social.url} social={social} />;
          })}
        </div>
      </div>
    </section>
  );
}
