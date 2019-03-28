import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/panel.pug';
import templateList from './templates/panel-list.pug';
import templateSelection from './templates/panel-selection.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Panel = ({
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
          title="Panel Classic"
          template={template}
          importcss={importcss}
          classModifier="panel"
        />
        <Demo
          title="Panel List"
          template={templateList}
          importcss={importcss}
          classModifier="panel"
        />
        <Demo
          title="Panel Selection"
          template={templateSelection}
          importcss={importcss}
          classModifier="panel"
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

Panel.getInitialProps = getInitialProps('panel');

export default Panel;
