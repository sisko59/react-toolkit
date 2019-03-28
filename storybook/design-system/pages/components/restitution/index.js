import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import templateSimple from './templates/restitution-simple.pug';
import templateDouble from './templates/restitution-double.pug';
import templateMore from './templates/restitution-more.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Restitution = ({
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
          title="Restitution Simple"
          template={templateSimple}
          importcss={importcss}
          classModifier="restitution"
        />
        <Demo
          title="Restitution Double"
          template={templateDouble}
          importcss={importcss}
          classModifier="restitution"
        />
        <Demo
          title="Restitution More"
          template={templateMore}
          importcss={importcss}
          classModifier="restitution"
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

Restitution.getInitialProps = getInitialProps('restitution');

export default Restitution;
