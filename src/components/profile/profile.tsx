interface IProfileProps {
  image: string;
  summary: string;
}

function Profile(props: IProfileProps): React.ReactElement {
  const { image, summary } = props;

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="content">
        <img className="photo" src={image} />
        <div className="summary text">{summary}</div>
      </div>
    </div>
  );
}

export default Profile;
