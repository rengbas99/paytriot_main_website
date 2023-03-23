import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import RecentPostListStyles from '@/styles/RecentPostList.module.css';
import ButtonStyles from '@/styles/Button.module.css';
import PublishedDate from '@/components/blog/Post/PublishedDate';
import Tags from '@/components/blog/Post/Tags';
import ContentListStyles from '@/styles/ContentList.module.css';
import { Config } from '@/utils/Config';
import ReactMarkdownRenderers from '@/utils/ReactMarkdownRenderers';

export default function RecentPostList(props) {
  const { posts } = props;
  return (
    <>
      <h2 className={RecentPostListStyles.recentPostList__header}>
        Recent articles
      </h2>
      <ol className={ContentListStyles.contentList}>
        {posts.map(post => (
          <li key={post.sys.id}>
            <article className={ContentListStyles.contentList__post}>
              <PublishedDate date={post.date} />
              <Link
                href={`/blog/${post.slug}`}
                className={ContentListStyles.contentList__titleLink}
              >
                <h2 className={ContentListStyles.contentList__title}>
                  {post.title}
                </h2>
              </Link>
              {post.tags !== null && <Tags tags={post.tags} />}
              <div className={ContentListStyles.contentList__excerpt}>
                <ReactMarkdown
                  // eslint-disable-next-line no-use-before-define
                  // children={post.excerpt}
                  renderers={ReactMarkdownRenderers(post.excerpt)}
                >
                  {post.excerpt}
                </ReactMarkdown>
              </div>
            </article>
          </li>
        ))}
      </ol>
      <Link
        href={Config.pageMeta.blogIndex.slug}
        className={ButtonStyles.button}
      >
        See more articles
      </Link>
    </>
  );
}
