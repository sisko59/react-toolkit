import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/form-card.pug';
import templateDisabled from './templates/form-card-disabled.pug';
import templateActive from './templates/form-card-active.pug';
import templateDefault from './templates/form-card-default.pug';
import templateGroupTwo from './templates/form-card-group-two.pug';
import templateGroupThree from './templates/form-card-group-three.pug';
import templateGroupFour from './templates/form-card-group-four.pug';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './index.scss';

const FormCard = ({
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
          title="FormCard"
          template={template}
          importcss={importcss}
          classModifier="formcard checkbox"
        />
        <Demo
          title="FormCard checkbox disabled"
          template={templateDisabled}
          importcss={importcss}
          classModifier="formcard"
        />
        <Demo
          title="FormCard radio"
          template={templateDefault}
          importcss={importcss}
          classModifier="formcard"
        />
        <Demo
          title="FormCard radio active with promotion"
          template={templateActive}
          importcss={importcss}
          classModifier="formcard"
        />
        <Demo
          title="FormCard radio group with 2 cards"
          template={templateGroupTwo}
          importcss={importcss}
          classModifier="formcard"
        />
        <Demo
          title="FormCard radio group with 3 cards"
          template={templateGroupThree}
          importcss={importcss}
          classModifier="formcard"
        />
        <Demo
          title="FormCard radio group with 4 cards"
          template={templateGroupFour}
          importcss={importcss}
          classModifier="formcard"
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

FormCard.getInitialProps = getInitialProps('form-card');

export default FormCard;
