import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/steps-new.pug';
import template2 from './templates/steps-new-sample2.pug';
import template3 from './templates/steps-new-sample3.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const StepsNew = ({
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
          title="StepsNew Classic"
          template={template}
          importcss={importcss}
          classModifier="stepsnew"
        />
        <Demo
          title="StepsNew Sample2"
          template={template2}
          importcss={importcss}
          classModifier="stepsnew"
        />
        <Demo
          title="StepsNew Sample3"
          template={template3}
          importcss={importcss}
          classModifier="stepsnew"
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

StepsNew.getInitialProps = getInitialProps('steps-new');

export default StepsNew;
