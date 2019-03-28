import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/form-radio.pug';
import templateSuccess from './templates/form-radio-success.pug';
import templateError from './templates/form-radio-error.pug';
import templateCustom from './templates/form-radio-custom.pug';
import templateCustomSuccess from './templates/form-radio-custom-success.pug';
import templateCustomError from './templates/form-radio-custom-error.pug';
import templateInline from './templates/form-radio-inline.pug';
import templateInlineSuccess from './templates/form-radio-inline-success.pug';
import templateInlineError from './templates/form-radio-inline-error.pug';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './index.scss';

const FormRadio = ({
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
          title="FormRadio"
          template={template}
          importcss={importcss}
          classModifier="formradio"
        />
        <Demo
          title="FormRadio Success"
          template={templateSuccess}
          importcss={importcss}
          classModifier="formradio"
        />
        <Demo
          title="FormRadio Error"
          template={templateError}
          importcss={importcss}
          classModifier="formradio"
        />
        <Demo
          title="FormRadio Custom"
          template={templateCustom}
          importcss={importcss}
          classModifier="formradio"
        />
        <Demo
          title="FormRadio Custom Success"
          template={templateCustomSuccess}
          importcss={importcss}
          classModifier="formradio"
        />
        <Demo
          title="FormRadio Custom Error"
          template={templateCustomError}
          importcss={importcss}
          classModifier="formradio"
        />
        <Demo
          title="FormRadio Inline"
          template={templateInline}
          importcss={importcss}
          classModifier="formradio"
        />
        <Demo
          title="FormRadio Inline Success"
          template={templateInlineSuccess}
          importcss={importcss}
          classModifier="formradio"
        />
        <Demo
          title="FormRadio Inline Error"
          template={templateInlineError}
          importcss={importcss}
          classModifier="formradio"
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

FormRadio.getInitialProps = getInitialProps('form-radio');

export default FormRadio;
