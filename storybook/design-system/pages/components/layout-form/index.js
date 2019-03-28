import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/layout-form.pug';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './index.scss';

const LayoutForm = ({
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
          title="LayoutForm"
          template={template}
          importcss={importcss}
          classModifier="layoutsform"
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

LayoutForm.getInitialProps = getInitialProps('layout-form');

export default LayoutForm;
