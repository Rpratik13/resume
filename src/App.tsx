import { useState } from 'react';

import 'assets/css/_index.scss';

import classnames from 'classnames';

import Award from 'components/award';
import Header from 'components/header';
import Skills from 'components/skills';
import Profile from 'components/profile';
import Section from 'components/section';
import Reference from 'components/reference';
import Experience from 'components/experience';

import { profile } from 'constants/profile';

function App(): React.ReactElement {
  const [darkTheme, _setDarkTheme] = useState<boolean>(false);

  return (
    <div
      className={classnames('page', {
        'page--dark': darkTheme,
        'page--light': !darkTheme,
      })}
    >
      <Header
        contacts={profile.contacts}
        name={profile.name}
        title={profile.title}
      />

      <Profile image={profile.photo} summary={profile.summary} />

      <Section title="Work Experience">
        <>
          {profile.experience.map((experience) => {
            return (
              <Experience
                details={experience.details}
                end={experience.end}
                organization={experience.organization}
                position={experience.position}
                start={experience.start}
              />
            );
          })}
        </>
      </Section>

      <Section title="Projects">
        <>
          {profile.projects.map((experience) => {
            return (
              <Experience
                details={experience.details}
                end={experience.end}
                position={experience.position}
                start={experience.start}
              />
            );
          })}
        </>
      </Section>

      <Section title="Skills">
        <div className="skills-wrapper">
          <Skills skills={profile.skills.Professional} title="Professional" />
          <Skills skills={profile.skills.Personal} title="Personal" />
        </div>
      </Section>

      <Section title="Education">
        <>
          {profile.education.map((education) => {
            return (
              <Experience
                details={education.details}
                end={education.end}
                position={education.position}
                start={education.start}
              />
            );
          })}
        </>
      </Section>

      <Section title="Awards and Certifications">
        <div className="award-wrapper">
          {profile.awards.map((award) => {
            return <Award details={award.details} name={award.name} />;
          })}
        </div>
      </Section>

      <Section title="References">
        <div className="reference-wrapper">
          {profile.references.map((reference) => {
            return (
              <Reference
                email={reference.email}
                name={reference.name}
                title={reference.title}
              />
            );
          })}
        </div>
      </Section>
    </div>
  );
}

export default App;
