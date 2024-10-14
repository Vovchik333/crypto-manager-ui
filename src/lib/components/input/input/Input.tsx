import { TextInputType } from '@/lib/enums/components';
import { ValueOf } from '@/lib/types';
import styles from './styles.module.scss';
import clsx from 'clsx';

type Props = {
    id?: string;
    className?: string;
    type?: ValueOf<typeof TextInputType>;
    name?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({
    id,
    className,
    type = TextInputType.TEXT,
    name,
    placeholder,
    value,
    onChange
}) => {
    return (
        <input 
            id={id}
            className={clsx(
                styles['input'],
                className
            )}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export { Input };
