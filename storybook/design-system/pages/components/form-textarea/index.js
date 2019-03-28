import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/form-textarea.pug';
import templateSuccess from './templates/form-textarea-success.pug';
import templateError from './templates/form-textarea-error.pug';
import templateDisabled from './templates/form-textarea-disabled.pug';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './index.scss';

const FormTextarea = ({
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
          title="FormTextarea Simple"
          template={template}
          importcss={importcss}
          classModifier="formtextarea"
        />
        <Demo
          title="FormTextarea Success"
          template={templateSuccess}
          importcss={importcss}
          classModifier="formtextarea"
        />
        <Demo
          title="FormTextarea Error"
          template={templateError}
          importcss={importcss}
          classModifier="formtextarea"
        />
        <Demo
          title="FormTextarea Disabled"
          template={templateDisabled}
          importcss={importcss}
          classModifier="formtextarea"
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

FormTextarea.getInitialProps = getInitialProps('form-textarea');

export default FormTextarea;
