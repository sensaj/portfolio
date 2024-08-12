export default function SocialIconContainer({ social }) {
  return (
    <a
      key={social.url}
      className={`social-icon text-decoration-none`}
      href={`${social.url}`}
      target="_blank"
    >
      <i className={social.icon}></i>
    </a>
  );
}
