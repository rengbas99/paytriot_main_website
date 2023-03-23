import TagsStyles from '@/styles/Tags.module.css';

export default function Tags(props: any) {
  const { tags } = props;

  return (
    <ul className={TagsStyles.tags}>
      {tags?.length > 0 &&
        tags?.map((tag: any, index: number) => (
          <li className={TagsStyles.tags__tag} key={tag}>
            {tag}
            {index < tags.length - 1 ? ' /  ' : ''}
          </li>
        ))}
    </ul>
  );
}
