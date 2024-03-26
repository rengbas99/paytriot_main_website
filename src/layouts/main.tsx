import GlobalStyles from './main.styles';
import PreviewBanner from '@/components/blog/PreviewBanner';




export default function MainLayout(props: any) {
  const { preview } = props;
  return (
    <>
      {preview && <PreviewBanner />}
      <main>{props.children}</main>

      <style jsx global>
        {GlobalStyles}
      </style>
    </>
  );
}
