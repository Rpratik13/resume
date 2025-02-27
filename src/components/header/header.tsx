import Contact from 'components/contact';

import { profile } from 'constants/profile';

interface IHeaderProps {
  contacts: typeof profile.contacts;
  name: string;
  title?: string;
}

function Header(props: IHeaderProps): React.ReactElement {
  const { contacts, name, title } = props;

  return (
    <div className="header">
      <div className="header__yellow-ball" />
      <h1 className="header__name">{name}</h1>
      {title && <h2 className="header__title text">{title}</h2>}

      {contacts.length && (
        <div className="contact-container">
          {profile.contacts.map((contact) => {
            return (
              <Contact
                heading={contact.heading}
                Icon={contact.icon}
                link={contact.link}
                value={contact.value}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Header;
