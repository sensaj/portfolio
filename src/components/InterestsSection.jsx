import interests from "../assets/interests.json";
import InterestContainer from "./InterestContainer";
export default function InterestsSection() {
  return (
    <section className={`resume-section`} id={`interests`}>
      <div className={`resume-section-content`}>
        <h2 className={`mb-5`}>Interests</h2>
        {interests.map((interest) => {
          return <InterestContainer key={interest.id} interest={interest} />;
        })}
      </div>
    </section>
  );
}
