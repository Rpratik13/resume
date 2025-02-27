interface IProfileProps {
  image: string;
  summary: string;
}

function Profile(props: IProfileProps): React.ReactElement {
  const { image, summary } = props;

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile__content">
        <img className="profile__photo" src={image} />
        <div className="profile__summary text">{summary}</div>
      </div>
    </div>
  );
}

export default Profile;
