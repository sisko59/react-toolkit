import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
/* const template = require("pug-loader!./templates/alertSimpleInfo.pug");
const templateSuccess = require("pug-loader!./templates/alertSimpleSuccess.pug");
const templateDanger = require("pug-loader!./templates/alertSimpleDanger.pug");
const templateComplex = require("pug-loader!./templates/alertComplexe.pug");
const templateComplexError = require("pug-loader!./templates/alertComplexError.pug"); */
import template from './templates/alertSimpleInfo.pug';
import templateSuccess from './templates/alertSimpleSuccess.pug';
import templateDanger from './templates/alertSimpleDanger.pug';
import templateComplex from './templates/alertComplexe.pug';
import templateComplexError from './templates/alertComplexError.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Alert = ({
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
        <Demo title="Alert Info" template={template} importcss={importcss} />
        <Demo
          title="Alert Success"
          template={templateSuccess}
          importcss={importcss}
        />
        <Demo
          title="Alert Danger"
          template={templateDanger}
          importcss={importcss}
        />
        <Demo
          title="Alert Info"
          template={templateComplex}
          importcss={importcss}
        />
        <Demo
          title="Alert Danger complex"
          template={templateComplexError}
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

Alert.getInitialProps = getInitialProps('alert');

export default Alert;
