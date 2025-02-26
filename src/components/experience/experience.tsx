interface IExperienceProps {
  details: string | string[];
  end: string;
  organization?: string;
  position?: string;
  start: string;
}

function Experience(props: IExperienceProps): React.ReactElement {
  const { details, end, organization, position, start } = props;

  let content: React.ReactElement | string | string[] = details;

  if (typeof details === 'object') {
    content = (
      <ul>
        {details.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    );
  }

  return (
    <div className="experience">
      <div className="experience__left">
        <h4>
          {start} - {end}
        </h4>
        {organization && <div className="text">{organization}</div>}
      </div>
      <div className="experience__right">
        {position && <h4>{position}</h4>}
        <div className="text">{content}</div>
      </div>
    </div>
  );
}

export default Experience;
