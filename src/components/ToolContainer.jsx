export default function ToolContainer({ tool }) {
  return (
    <li className={`list-inline-item`}>
      <div className={`col bg-light px-5 rounded`}>
        <i className={tool.icon}></i>
        <h6 className={`text-center`}>{tool.name}</h6>
      </div>
    </li>
  );
}
