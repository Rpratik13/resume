import Slider from 'components/slider';

interface ISkillsProps {
  skills: Record<string, number>;
  title: string;
}

function Skills(props: ISkillsProps): React.ReactElement {
  const { skills, title } = props;

  return (
    <div className="skills">
      <h4>{title}</h4>

      {Object.entries(skills).map(([skill, value]) => {
        return (
          <div className="skills__skill">
            <div className="text">{skill}</div>
            <Slider percent={value} reverse />
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
