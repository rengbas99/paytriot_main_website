import ExternalUrlStyles from '@/styles/ExternalUrl.module.css';
import Link from 'next/link';
import InfoSvg from './InfoSvg';

export default function ExternalUrl(props: any) {
  const { url } = props;

  function formatUrlForDisplay(url: string) {
    return new URL(url).hostname;
  }

  return (
    <div className={ExternalUrlStyles.externalUrl}>
      <span className={ExternalUrlStyles.externalUrl__svgContainer}>
        <InfoSvg />
      </span>
      <p className={ExternalUrlStyles.externalUrl__text}>
        Originally published on{' '}
        <Link
          href={url}
          target="_blank"
          rel="nofollow noreferrer"
          className={ExternalUrlStyles.externalUrl__link}
        >
          {formatUrlForDisplay(url)}
        </Link>
      </p>
    </div>
  );
}
