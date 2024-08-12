import educations from "../assets/educations.json";
import EducationContainer from "./EducationContainer";
export default function EducationSection() {
  return (
    <section className={`resume-section`} id={`education`}>
      <div className={`resume-section-content`}>
        <h2 className={`mb-5`}>Education</h2>
        {educations.map((education) => {
          return (
            <EducationContainer key={education.id} education={education} />
          );
        })}
      </div>
    </section>
  );
}
