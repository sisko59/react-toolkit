import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/form-select.pug';
import templateSuccess from './templates/form-select-success.pug';
import templateError from './templates/form-select-error.pug';
import templateDisabled from './templates/form-select-disabled.pug';
import templateInline from './templates/form-select-inline.pug';
import templateInlineSuccess from './templates/form-select-inline-success.pug';
import templateInlineError from './templates/form-select-inline-error.pug';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './index.scss';

const FormSelect = ({
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
          title="FormSelect Simple"
          template={template}
          importcss={importcss}
          classModifier="formselect"
        />
        <Demo
          title="FormSelect Success"
          template={templateSuccess}
          importcss={importcss}
          classModifier="formselect"
        />
        <Demo
          title="FormSelect Error"
          template={templateError}
          importcss={importcss}
          classModifier="formselect"
        />
        <Demo
          title="FormSelect Disabled"
          template={templateDisabled}
          importcss={importcss}
          classModifier="formselect"
        />
        <Demo
          title="FormSelect with Inline FormText"
          template={templateInline}
          importcss={importcss}
          classModifier="formselect"
        />
        <Demo
          title="FormSelect with Inline FormText success"
          template={templateInlineSuccess}
          importcss={importcss}
          classModifier="formselect"
        />
        <Demo
          title="FormSelect with Inline FormText error"
          template={templateInlineError}
          importcss={importcss}
          classModifier="formselect"
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

FormSelect.getInitialProps = getInitialProps('form-select');

export default FormSelect;
