interface IAwardProps {
  details: string;
  name: string;
}

function Award(props: IAwardProps): React.ReactElement {
  const { details, name } = props;

  return (
    <div className="award">
      <h4>{name}</h4>
      <div className="text">{details}</div>
    </div>
  );
}

export default Award;
