import Layout from '../../components/Layout/HomePage.js';
import Link from 'next/link';
import './index.scss';
import Head from '../../components/Layout/Head';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = ({ content, meta }) => (
  <Layout>
    <Head meta={meta} />
    {content}
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

Blog.getInitialProps = async function() {
  const content = await require(`./content.md`);
  const meta = require(`./meta.json`);
  return { content, meta };
};

export default Blog;
