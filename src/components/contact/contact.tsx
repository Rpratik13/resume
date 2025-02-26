import { IconType } from 'react-icons';

interface IContactProps {
  heading: string;
  Icon: IconType;
  link?: string;
  value: string;
}

function Contact(props: IContactProps): React.ReactElement {
  const { heading, Icon, link, value } = props;

  return (
    <div className="contact">
      <Icon className="icon" size={30} />
      <div>
        <h3 className="heading">{heading}</h3>
        <div>{link ? <a href={link}>{value}</a> : value}</div>
      </div>
    </div>
  );
}

export default Contact;
