import './Input.css';

type Props = {
    id?: string;
    className?: string;
    type?: 'email' | 'password' | 'submit' | 'text';
    name?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({
    id,
    className,
    type = 'text',
    name,
    placeholder,
    value,
    onChange
}) => {
    return (
        <input 
            id={id}
            className={className}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export { Input };
