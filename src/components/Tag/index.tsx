import style from './Tag.module.css';

export default function Tag({ content }: { content: string | string[] }) {
    if (typeof content !== 'string') {
        return (
            <div
                className={`${style.tagContainer}`}
            >
                {content.map((item) => (
                    <span key={item} className={style.tag}>
                        {item}
                    </span>
                ))}
            </div>
        );
    }

    return <span className={style.tag}>{content}</span>;
}
