export default function EducationContainer({ education }) {
  return (
    <div
      className={`d-flex flex-column flex-md-row justify-content-between mb-5`}
    >
      <div className={`flex-grow-1`}>
        <h3 className={`mb-0`}>{education.institution}</h3>
        <div className={`subheading mb-3`}>{education.education}</div>
        <div>{education.award}</div>
      </div>
      <div className={`flex-shrink-0`}>
        <span className={`text-success`}>
          {education.start} - {education.end}
        </span>
      </div>
    </div>
  );
}
