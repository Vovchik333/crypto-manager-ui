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
            <h4 className="info-block-top-row">{topRow}</h4>
            <p className="info-block-bottom-row">{bottomRow}</p>
        </article>
    );
}

export { InfoBlock };
