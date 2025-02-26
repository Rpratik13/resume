import Slider from 'components/slider';

interface ISectionProps {
  children: React.ReactElement;
  title: string;
}

function Section(props: ISectionProps): React.ReactElement {
  const { children, title } = props;

  return (
    <div className="section">
      <div className="section__left">
        <h3 className="section__title">{title}</h3>
        <div className="section__line" />
      </div>
      <div className="section__content">
        <Slider percent={30} />
        {children}
      </div>
    </div>
  );
}

export default Section;
