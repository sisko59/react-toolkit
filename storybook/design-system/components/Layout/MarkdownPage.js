import ReactMarkdown from 'react-markdown';
import Menu from '../Menu';
import Markdown from 'components/Markdown';
import App from '../App';
import Content from '../Content';
import { PREFIX } from '../../constants';

import '../../assets/scss/global.scss';

const Layout = ({ children, title, content }) => (
  <App>
    <Menu />
    <Content>
      <article className={`${PREFIX}-page`}>
        <header className={`${PREFIX}-page__header`}>
          <ReactMarkdown source={title} />
        </header>
        <section className={`${PREFIX}-page__content`}>
          <Markdown source={content} />
        </section>
      </article>
      {children}
    </Content>
  </App>
);

export default Layout;
