import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/accordion.pug';
import templateArrow from './templates/accordion-right-arrow.pug';
import templateLight from './templates/accordion-light.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Accordion = ({
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
          title="Classic Accordion"
          template={template}
          importcss={importcss}
        />
        <Demo
          title="Accordion with right arrow"
          template={templateArrow}
          importcss={importcss}
        />
        <Demo
          title="Accordion light"
          template={templateLight}
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

Accordion.getInitialProps = getInitialProps('accordion');

export default Accordion;
