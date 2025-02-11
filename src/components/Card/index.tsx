import Tag from 'components/Tag';
import style from './Card.module.css';

export default function Card({
    content,
    tags,
    title,
    size = 'small',
}: {
    content: React.ReactElement;
    tags: string[];
        title: string;
        size?: 'small' | 'large',
}) {
    return (
        <article
            className={`${style.cardContainer} ${style[size]}`}
        >
            <div className={style.cardContent}>{content}</div>
            <Tag content={tags} />
            <h3 className={style.cardTitle}>{title}</h3>
        </article>
    );
}
