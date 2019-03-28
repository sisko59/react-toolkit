import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/button.pug';
import templateIcon from './templates/button-icon.pug';
import templateReverse from './templates/button-reverse.pug';
import templateCircle from './templates/circle.pug';
import templateGhost from './templates/ghost.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Button = ({
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
          title="Classic Button"
          template={template}
          importcss={importcss}
        />
        <Demo
          title="Button with icon"
          template={templateIcon}
          importcss={importcss}
        />
        <Demo
          title="Button reverse"
          template={templateReverse}
          importcss={importcss}
        />
        <Demo
          title="Button circle"
          template={templateCircle}
          importcss={importcss}
        />
        <Demo
          title="Button ghost"
          template={templateGhost}
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

Button.getInitialProps = getInitialProps('button');

export default Button;
