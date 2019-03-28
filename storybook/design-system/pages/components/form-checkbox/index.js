import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/form-checkbox.pug';
import templateSuccess from './templates/form-checkbox-success.pug';
import templateError from './templates/form-checkbox-error.pug';
import templateCustom from './templates/form-checkbox-custom.pug';
import templateCustomSuccess from './templates/form-checkbox-custom-success.pug';
import templateCustomError from './templates/form-checkbox-custom-error.pug';
import templateInline from './templates/form-checkbox-inline.pug';
import templateInlineSuccess from './templates/form-checkbox-inline-success.pug';
import templateInlineError from './templates/form-checkbox-inline-error.pug';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './index.scss';

const FormCheckbox = ({
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
          title="FormCheckbox"
          template={template}
          importcss={importcss}
          classModifier="formcheckbox"
        />
        <Demo
          title="FormCheckbox Success"
          template={templateSuccess}
          importcss={importcss}
          classModifier="formcheckbox"
        />
        <Demo
          title="FormCheckbox Error"
          template={templateError}
          importcss={importcss}
          classModifier="formcheckbox"
        />
        <Demo
          title="FormCheckbox Custom"
          template={templateCustom}
          importcss={importcss}
          classModifier="formcheckbox"
        />
        <Demo
          title="FormCheckbox Custom Success"
          template={templateCustomSuccess}
          importcss={importcss}
          classModifier="formcheckbox"
        />
        <Demo
          title="FormCheckbox Custom Error"
          template={templateCustomError}
          importcss={importcss}
          classModifier="formcheckbox"
        />
        <Demo
          title="FormCheckbox Inline"
          template={templateInline}
          importcss={importcss}
          classModifier="formcheckbox"
        />
        <Demo
          title="FormCheckbox Inline Success"
          template={templateInlineSuccess}
          importcss={importcss}
          classModifier="formcheckbox"
        />
        <Demo
          title="FormCheckbox Inline Error"
          template={templateInlineError}
          importcss={importcss}
          classModifier="formcheckbox"
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

FormCheckbox.getInitialProps = getInitialProps('form-checkbox');

export default FormCheckbox;
