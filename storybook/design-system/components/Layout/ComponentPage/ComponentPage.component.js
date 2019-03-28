import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactMarkdown from 'react-markdown';
const ReactMarkdownHtml = require('react-markdown/with-html');
import Menu from 'components/Menu';
import App from 'components/App';
import Content from 'components/Content';
import HeaderLinks from 'components/HeaderLinks';
import { PREFIX } from '../../../constants';
import { ComponentProvider } from './Component.context';

import 'highlightjs/styles/default.css';
import 'highlightjs/styles/atom-one-dark.css';
import 'react-tabs/style/react-tabs.scss';
import 'assets/scss/global.scss';
import '@axa-fr/react-toolkit-alert/dist/alert.scss';

const Layout = ({
  children,
  title,
  content,
  demo,
  usage,
  style,
  headerLinks,
  type
}) => (
  <App>
    <Menu />
    <ComponentProvider value={headerLinks}>
      <Content>
        <article className={`${PREFIX}-page`}>
          <header className={`${PREFIX}-page__header`}>
            <h3>{type}</h3>
            <ReactMarkdown source={title} />
          </header>
          <div className={`${PREFIX}-page__links`}>
            <HeaderLinks headerLinks={headerLinks} />
          </div>
          {content && (
            <div className={`${PREFIX}-page__info`}>
              <ReactMarkdownHtml escapeHtml={false} source={content} />
            </div>
          )}
          <section className={`${PREFIX}-page__content`}>
            <Tabs>
              <TabList>
                <Tab>Démos</Tab>
                <Tab>Usage</Tab>
                <Tab>Style</Tab>
              </TabList>

              <TabPanel>{demo}</TabPanel>
              <TabPanel>{usage}</TabPanel>
              <TabPanel>{style}</TabPanel>
            </Tabs>
          </section>
        </article>
        {children}
      </Content>
    </ComponentProvider>

    <script async defer src="https://buttons.github.io/buttons.js" />
  </App>
);

export default Layout;
