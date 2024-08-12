import tools from "../assets/tools.json";
import workflows from "../assets/workflows.json";
import ToolContainer from "./ToolContainer";
import WorkflowContainer from "./WorkflowCOntainer";
export default function SkillsSection() {
  return (
    <section className={`resume-section`} id={`skills`}>
      <div className={`resume-section-content`}>
        <h2 className={`mb-5`}>Skills</h2>
        <div className={`subheading mb-3`}>Programming Languages & Tools</div>
        <ul className={`list-inline dev-icons`}>
          {tools.map((tool) => {
            return <ToolContainer key={tool.id} tool={tool} />;
          })}
        </ul>
        <div className={`subheading mb-3`}>Workflow</div>

        <ul className={`fa-ul mb-0`}>
          {workflows.map((workflow) => {
            return <WorkflowContainer key={workflow.id} workflow={workflow} />;
          })}
        </ul>
      </div>
    </section>
  );
}
