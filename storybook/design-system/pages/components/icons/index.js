import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from 'node_modules/@axa-fr/react-toolkit-core/dist/assets/templates/template.pug';
import templateDecli from './templates/icons-decli.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Icons = ({
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
          title="Classic Icons"
          template={template}
          importcss={importcss}
          classModifier="icons"
        />
        <Demo
          title="Decline Icons"
          template={templateDecli}
          importcss={importcss}
          classModifier="icons"
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

Icons.getInitialProps = getInitialProps('icons');

export default Icons;
