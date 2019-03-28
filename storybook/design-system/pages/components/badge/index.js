import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/badge7Success.pug';
import templateBadge42Info from './templates/badge42Info.pug';
import templateBadgeAxaError from './templates/badgeAxaError.pug';
import templateBadgeLoremIpsumDanger from './templates/badgeLoremIpsumDanger.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const Badge = ({
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
          title="Badge Info"
          template={templateBadge42Info}
          importcss={importcss}
        />
        <Demo title="Badge Success" template={template} importcss={importcss} />
        <Demo
          title="Badge Danger"
          template={templateBadgeAxaError}
          importcss={importcss}
        />
        <Demo
          title="Badge Info"
          template={templateBadgeLoremIpsumDanger}
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

Badge.getInitialProps = getInitialProps('badge');

export default Badge;
