import './NotFound.css';

type Props = {
    children: string;
}

const NotFound: React.FC<Props> = ({
    children
}) => {
    return (
        <div className="not-found">
            <p className="not-found__message">{children}</p>
        </div>
    );
}

export { NotFound };
