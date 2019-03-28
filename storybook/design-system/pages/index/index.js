import Layout from 'components/Layout/HomePage.js';
import { PREFIX } from '../../constants';
import Head from 'components/Layout/Head';
import Logo from 'components/Logo';
import Encart from 'components/Encart';
import ButtonLink from 'components/ButtonLink';
import './home.scss';
import slashLogo from 'static/images/slash-logo.svg';
import sassHtml5Css3Logo from 'static/images/sass-html5-css3.svg';
import reactStorybookLogo from 'static/images/react-storybook.svg';
import uXLogo from 'static/images/ux.svg';
import '@axa-fr/react-toolkit-button/src/button.scss';

const Home = ({ meta }) => (
  <Layout>
    <Head meta={meta} />
    <article className={`${PREFIX}-home`}>
      <header className={`${PREFIX}-home__header`}>
        <Logo
          icon={slashLogo}
          title="Slash"
          subtitle="Design System"
          alt="Slash Design System"
          classModifier="home-intro"
        />
        <p className={`${PREFIX}-home__intro`}>
          A "living Design System" is a web document that shows all components
          interface elements(UI).It informs about the typography, the colors,
          the grid, the iconography, the interactions ...
        </p>
      </header>
      <section className={`${PREFIX}-home__getstarted`}>
        <div className={`${PREFIX}-home__getstarted-content`}>
          <h3 className={`${PREFIX}-home__getstarted-title`}>Personnalized</h3>
          <p className={`${PREFIX}-home__getstarted-text`}>
            With over thirty modules, personalize your tools so they best fit
            your needs. Select only the modules you needs and get quicky
            functionals and web normalized pages.
          </p>
          <h3 className={`${PREFIX}-home__getstarted-title`}>Simple</h3>
          <p className={`${PREFIX}-home__getstarted-text`}>
            Install the toolkit with just a sign on your terminal. Then copy and
            paste each module needed to install it.Thanks to the toolkit you get
            in few minutes a functional page.
          </p>
          <ButtonLink
            href="/"
            label="GET STARTED"
            iconName="arrowthin-right"
            right={Boolean(true)}
          />
        </div>
      </section>
      <section className={`${PREFIX}-home__explore`}>
        <h3 className={`${PREFIX}-home__explore-title`}>
          Explore the <span className={`${PREFIX}-slash`}>Slash</span> Design
          System
        </h3>
        <div className={`${PREFIX}-home__encarts`}>
          <Encart
            image={uXLogo}
            title="UX Guidelines"
            text="All rules and guidelines for all components and UX patterns."
          />
          <Encart
            image={sassHtml5Css3Logo}
            title="HTML/CSS3/SASS"
            text="Get HTML Code for each components easily. You can also know wich import Sass to make optimized bundle."
          />
          <Encart
            image={reactStorybookLogo}
            title="React/Storybook"
            text="Interactive live documentation of all components. You can play with components props to understand the functional of components."
          />
        </div>
      </section>
      <section className={`${PREFIX}-home__demotuto`}>
        <article className={`${PREFIX}-home__demo`}>
          <h3 className={`${PREFIX}-home__demo-title`}>Demo</h3>
          <p className={`${PREFIX}-home__demo-text`}>
            Discover our sample application and start your own.
          </p>
          <ButtonLink
            href="https://axaguildev.github.io/react-toolkit/demo/latest/#/"
            target="_blank"
            label="See demo"
            iconName="arrowthin-right"
            right={Boolean(true)}
            classModifier="demo"
          />
        </article>
        <article className={`${PREFIX}-home__tuto`}>
          <h3 className={`${PREFIX}-home__tuto-title`}>Tutorial</h3>
          <p className={`${PREFIX}-home__tuto-text`}>
            Discover our video tutorial and learn how to use.
          </p>
          <ButtonLink
            href="https://axaguildev.github.io/react-toolkit/demo/latest/#/"
            target="_blank"
            label="Watch tutorial"
            iconName="arrowthin-right"
            right={Boolean(true)}
            classModifier="tuto"
          />
        </article>
      </section>
    </article>
  </Layout>
);

Home.getInitialProps = async function() {
  const meta = require(`./meta.json`);
  return { meta };
};

export default Home;
