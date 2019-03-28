import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/header.pug';
import templateNav from './templates/header-nav.pug';
import templateNavTitleBar from './templates/header-titlebar.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Header = ({
  title,
  content,
  meta,
  importcss,
  usage,
  typography,
  headerLinks,
  colors,
  structure,
  type
}) => (
  <Layout
    headerLinks={headerLinks}
    title={title}
    content={content}
    type={type}
    demo={
      <>
        <Demo
          title="Classic Header"
          template={template}
          importcss={importcss}
        />
        <Demo
          title="Header with Navigation"
          template={templateNav}
          importcss={importcss}
        />
        <Demo
          title="Header with TitleBar"
          template={templateNavTitleBar}
          importcss={importcss}
        />
      </>
    }
    usage={<Markdown source={usage} />}
    style={
      <Style colors={colors} typography={typography} structure={structure} />
    }
  >
    <Head meta={meta} />
  </Layout>
);

Header.getInitialProps = getInitialProps('header');

export default Header;
