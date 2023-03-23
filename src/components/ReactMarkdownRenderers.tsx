import Link from 'next/link';
import TypographyStyles from '@/styles/Typography.module.css';

/*
 * The react-markdown package is used to render the blog post excerpt markdown field.
 * https://www.npmjs.com/package/react-markdown
 *
 * This function is used to render markdown fields consistently across
 * the application, applying appropriate typography styles and markup.
 *
 */

export default function ReactMarkdownRenderers(markdown: string) {
  return {
    heading: ({ children }: { children: string }) => (
      <h3 className={TypographyStyles.heading__h3}>{children}</h3>
    ),
    strong: ({ children }: { children: string }) => (
      <span className={TypographyStyles.bodyCopy__bold}>{children}</span>
    ),
    paragraph: ({ children }: { children: string }) => (
      <p className={TypographyStyles.bodyCopy}>{children}</p>
    ),
    link: ({ children, href }: { children: string; href: string }) => (
      <Link
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className={TypographyStyles.inlineLink}
      >
        {children}
      </Link>
    )
  };
}
