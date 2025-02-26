interface IAwardProps {
  email: string;
  name: string;
  title: string;
}

function Reference(props: IAwardProps): React.ReactElement {
  const { email, name, title } = props;

  return (
    <div className="reference">
      <h4>{name}</h4>
      <div className="text">{title}</div>
      <div className="text">{email}</div>
    </div>
  );
}

export default Reference;
