import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/modal.pug';
import templateLarge from './templates/modal-large.pug';
import templateSmall from './templates/modal-small.pug';
import styleComponents from './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Modal = ({
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
          title="Modal Classic"
          template={template}
          importcss={importcss}
          iframeMode={Boolean(true)}
          styleComponents={styleComponents}
        />
        <Demo
          title="Modal Large"
          template={templateLarge}
          importcss={importcss}
          iframeMode={Boolean(true)}
          styleComponents={styleComponents}
        />
        <Demo
          title="Modal Small"
          template={templateSmall}
          importcss={importcss}
          iframeMode={Boolean(true)}
          styleComponents={styleComponents}
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

Modal.getInitialProps = getInitialProps('modal');

export default Modal;
