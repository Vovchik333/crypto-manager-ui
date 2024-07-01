import './InfoBlock.css';

type Props = {
    className?: string;
    topRow: string | number,
    bottomRow: string | number
}

const InfoBlock: React.FC<Props> = ({
    className,
    topRow,
    bottomRow
}) => {
    return (
        <article className={`info-block ${className}`}>
            <h4 className="info-block__header">{topRow}</h4>
            <p className="info-block__description">{bottomRow}</p>
        </article>
    );
}

export { InfoBlock };
