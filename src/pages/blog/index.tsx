import ContentfulApi from '@/components/ContentfulApi';
import { Config } from '@/components/Config';
import PageMeta from '@/components/blog/PageMeta';
import PostList from '@/components/blog/PostList';
import RichTextPageContent from '@/components/blog/RichTextPageContent';
import MainLayout from '@/layouts/main';
import ContentWrapper from '@/components/blog/ContentWrapper';
import PageContentWrapper from '@/components/blog/PageContentWrapper';
import HeroBanner from '@/components/blog/HeroBanner';

export default function BlogIndex(props: any) {
  const { postSummaries, currentPage, totalPages, pageContent, preview } =
    props;

  /**
   * This provides some fallback values to PageMeta so that a pageContent
   * entry is not required for /blog
   */
  const pageTitle = pageContent ? pageContent.title : 'Paytriot Blog';
  const pageDescription = pageContent
    ? pageContent.description
    : 'Articles | blog starter';

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        url={Config.pageMeta.blogIndex.url}
      />

      {pageContent?.heroBanner !== null && (
        <HeroBanner data={pageContent?.heroBanner} />
      )}

      <ContentWrapper>
        {pageContent?.body && (
          <PageContentWrapper>
            <RichTextPageContent richTextBodyField={pageContent.body} />
          </PageContentWrapper>
        )}
        <PostList
          posts={postSummaries}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </ContentWrapper>
    </MainLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1);
  const pageContent = await ContentfulApi.getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview
    }
  );

  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize
  );

  return {
    props: {
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: '1',
      pageContent: pageContent || null
    }
  };
}
