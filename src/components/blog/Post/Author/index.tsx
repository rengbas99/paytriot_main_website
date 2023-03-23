import Image from 'next/image';
import Link from 'next/link';
import AuthorStyles from '@/styles/Author.module.css';
import TypographyStyles from '@/styles/Typography.module.css';

function renderTwitter(username: string) {
  return (
    <Link
      className={`${TypographyStyles.inlineLink} ${AuthorStyles.author__linkText}`}
      href={`https://twitter.com/${username}`}
      target="_blank"
      rel="nofollow noreferrer"
    >
      Twitter
    </Link>
  );
}

function renderTwitch(username: string) {
  return (
    <Link
      className={`${TypographyStyles.inlineLink} ${AuthorStyles.author__linkText}`}
      href={`https://twitch.tv/${username}`}
      target="_blank"
      rel="nofollow noreferrer"
    >
      Twitch
    </Link>
  );
}

function renderGitHub(username: string) {
  return (
    <Link
      className={`${TypographyStyles.inlineLink} ${AuthorStyles.author__linkText}`}
      href={`https://github.com/${username}`}
      target="_blank"
      rel="nofollow noreferrer"
    >
      GitHub
    </Link>
  );
}

function renderWebsite(url: string) {
  return (
    <Link
      className={`${TypographyStyles.inlineLink} ${AuthorStyles.author__linkText}`}
      href={url}
      target="_blank"
      rel="nofollow noreferrer"
    >
      Website
    </Link>
  );
}

export default function Author(props: any) {
  const { author } = props;
  const hasLinks =
    author.twitterUsername ||
    author.twitchUsername ||
    author.gitHubUsername ||
    author.websiteUrl;
  return (
    <>
      <div className={AuthorStyles.author}>
        <div className={AuthorStyles.author__imgContainer}>
          <Image
            style={{ height: 'auto', maxWidth: '100%' }}
            className={AuthorStyles.author__img}
            src={`${author.image.url}?w=350`}
            alt={author.image.description}
            height={author.image.height}
            width={author.image.width}
          />
        </div>
        <div className={AuthorStyles.author__detailsContainer}>
          <h2 className={AuthorStyles.author__name}>{author.name}</h2>
          <p className={AuthorStyles.author__description}>
            {author.description}
          </p>
          {hasLinks && (
            <div className={AuthorStyles.author__links}>
              {author.twitterUsername && renderTwitter(author.twitterUsername)}
              {author.twitchUsername && renderTwitch(author.twitchUsername)}
              {author.gitHubUsername && renderGitHub(author.gitHubUsername)}
              {author.websiteUrl && renderWebsite(author.websiteUrl)}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
