import { InputType } from '../../common/enums';
import { ValueOf } from '../../common/generic';
import './Input.css';

type Props = {
    id?: string;
    className?: string;
    type?: ValueOf<typeof InputType>;
    name?: string;
    placeholder?: string;
    value?: string | number;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({
    id,
    className,
    type = InputType.TEXT,
    name,
    placeholder,
    value,
    checked,
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
            checked={checked}
            onChange={onChange}
        />
    );
};

export { Input };
