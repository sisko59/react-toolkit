import React from 'react';
import { PREFIX } from '../../constants';

const HeaderLinks = ({ storybook, github, npm }) => (
  <>
    <div className={`${PREFIX}-header__links`}>
      <a target="_blank" href={storybook}>
        <img
          src="https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg"
          alt="react storybook"
        />
      </a>
      <a target="_blank" href={github}>
        <img
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="github readme"
        />
      </a>
      {npm && (
        <a target="_blank" href={npm.href}>
          <img src={npm.src} alt="npm version" />
        </a>
      )}
      <a
        target="_blank"
        className="github-button"
        href="https://github.com/AxaGuilDEv/react-toolkit"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star AxaGuilDEv/react-toolkit on GitHub"
      >
        Star
      </a>
    </div>
  </>
);

export default HeaderLinks;
