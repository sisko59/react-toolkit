import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/tabs-simple.pug';
import templateComplex from './templates/tabs-complex.pug';
import templateLongText from './templates/tabs-long-text.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Tabs = ({
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
          title="Tabs Simple"
          template={template}
          importcss={importcss}
          classModifier="tabs"
        />
        <Demo
          title="Tabs Complex"
          template={templateComplex}
          importcss={importcss}
          classModifier="tabs"
        />
        <Demo
          title="Tabs with Long Text"
          template={templateLongText}
          importcss={importcss}
          classModifier="tabs"
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

Tabs.getInitialProps = getInitialProps('tabs');

export default Tabs;
