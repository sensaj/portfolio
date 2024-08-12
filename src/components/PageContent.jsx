import AboutSection from "./AboutSection";
import EducationSection from "./EducationsSection";
import ExperienceSection from "./ExperienceSection";
import InterestsSection from "./InterestsSection";
import SkillsSection from "./SkillsSection";

export default function PageContent() {
  return (
    <div className={`container-fluid`}>
      <AboutSection />
      <hr className={`m-0`} />
      <ExperienceSection />
      <hr className={`m-0`} />
      <EducationSection />
      <hr className={`m-0`} />
      <SkillsSection />
      <hr className={`m-0`} />
      <InterestsSection />
      <hr className={`m-0`} />
    </div>
  );
}
