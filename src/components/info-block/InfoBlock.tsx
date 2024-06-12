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
        <div className={`info-block ${className}`}>
            <strong className="info-block-top-row">{topRow}</strong>
            <small className="info-block-bottom-row">{bottomRow}</small>
        </div>
    );
}

export { InfoBlock };
