import PublishedDate from '@/components/blog//Post/PublishedDate';
import ExternalUrl from '@/components/blog/Post/ExternalUrl';
import Tags from '@/components/blog/Post/Tags';
import RichTextPageContent from '@/components/blog/RichTextPageContent';
import RichTextPageContentStyles from '@/styles/RichTextPageContent.module.css';
import TypographyStyles from '@/styles/Typography.module.css';

export default function Post(props: any) {
  const { post } = props;

  return (
    <article className={RichTextPageContentStyles.page}>
      {post.externalUrl && <ExternalUrl url={post.externalUrl} />}
      <PublishedDate date={post.date} />
      {post.tags !== null && <Tags tags={post.tags} />}
      <h1 className={TypographyStyles.heading__h1}>{post.title}</h1>
      <RichTextPageContent richTextBodyField={post.body} renderH2Links={true} />
      {/* {post.author !== null && <Author author={post.author} />} */}
    </article>
  );
}
