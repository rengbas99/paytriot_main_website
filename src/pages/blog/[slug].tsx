import ContentfulApi from '@/components/ContentfulApi';
import Post from '@/components/blog/Post';
import { Config } from '@/components/Config';
import PageMeta from '@/components/blog/PageMeta';
import MainLayout from '@/layouts/main';
import ContentWrapper from '@/components/blog/ContentWrapper';

export default function PostWrapper(props: any) {
  const { post, preview } = props;

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
        canonical={post.externalUrl ? post.externalUrl : false}
      />
      <ContentWrapper>
        <Post post={post} />
      </ContentWrapper>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const blogPostSlugs = await ContentfulApi.getAllPostSlugs();

  const paths = blogPostSlugs.map(slug => {
    return { params: { slug } };
  });

  // Using fallback: "blocking" here enables preview mode for unpublished blog slugs
  // on production
  return {
    paths,
    fallback: 'blocking'
  };
}

export async function getStaticProps({
  params,
  preview = false
}: {
  params: any;
  preview: boolean;
}) {
  const post = await ContentfulApi.getPostBySlug(params.slug, {
    preview: preview
  });

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      preview,
      post
    }
  };
}
