import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/form-text.pug';
import templateSuccess from './templates/form-text-success.pug';
import templateError from './templates/form-text-error.pug';
import templateDisabled from './templates/form-text-disabled.pug';
import templateClear from './templates/form-text-clear.pug';
import templateClearError from './templates/form-text-clear-error.pug';
import templateBulle from './templates/form-text-bulle.pug';
import templateBulleError from './templates/form-text-bulle-error.pug';
import templateBulleSuccess from './templates/form-text-bulle-success.pug';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './index.scss';

const FormText = ({
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
          title="FormText Simple"
          template={template}
          importcss={importcss}
          classModifier="forminputtext"
        />
        <Demo
          title="FormText Success"
          template={templateSuccess}
          importcss={importcss}
          classModifier="forminputtext"
        />
        <Demo
          title="FormText Error"
          template={templateError}
          importcss={importcss}
          classModifier="forminputtext"
        />
        <Demo
          title="FormText Disabled"
          template={templateDisabled}
          importcss={importcss}
          classModifier="forminputtext"
        />
        <Demo
          title="FormText With Clear"
          template={templateClear}
          importcss={importcss}
          classModifier="forminputtext"
        />
        <Demo
          title="FormText With Clear Error"
          template={templateClearError}
          importcss={importcss}
          classModifier="forminputtext"
        />
        <Demo
          title="FormText With Info Bulle"
          template={templateBulle}
          importcss={importcss}
          classModifier="forminputtext"
        />
        <Demo
          title="FormText With Info Bulle Error"
          template={templateBulleError}
          importcss={importcss}
          classModifier="forminputtext"
        />
        <Demo
          title="FormText With Info Bulle Success"
          template={templateBulleSuccess}
          importcss={importcss}
          classModifier="forminputtext"
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

FormText.getInitialProps = getInitialProps('form-text');

export default FormText;
