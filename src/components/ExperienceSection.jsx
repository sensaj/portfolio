import experiences from "../assets/experiences.json";
import ExperienceContainer from "./ExperienceContainer";
export default function ExperienceSection() {
  return (
    <section className={`resume-section`} id={`experience`}>
      <div className={`resume-section-content`}>
        <h2 className={`mb-5`}>Experience</h2>
        {experiences.map((experience) => {
          return (
            <ExperienceContainer key={experience.id} experience={experience} />
          );
        })}
      </div>
    </section>
  );
}
