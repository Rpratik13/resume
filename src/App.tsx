import { useState } from 'react';

import 'assets/css/_index.scss';

import classnames from 'classnames';

import Header from 'components/header';
import Profile from 'components/profile';

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
    </div>
  );
}

export default App;
