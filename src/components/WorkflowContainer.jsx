export default function WorkflowContainer({ workflow }) {
  return (
    <li>
      <span className={`fa-li`}>
        <i className={`fas fa-check`}></i>
      </span>
      {workflow.name}
    </li>
  );
}
