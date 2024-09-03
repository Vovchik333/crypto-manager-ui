import { ValueOf } from "@/lib/types";
import { Input } from "../input/Input";
import { TextInputType } from "@/lib/enums/components";
import styles from './styles.module.scss';
import { ReactNode } from "react";

type Props = {
    id: string;
    type?: ValueOf<typeof TextInputType>;
    name: string;
    placeholder: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children: ReactNode;
};

const LabelWithInput: React.FC<Props> = ({
    id,
    type = TextInputType.TEXT,
    name,
    placeholder,
    value,
    onChange,
    children
}) => {
    return (
        <div className={styles['label-with-input']}>
            <label 
                className={styles['label-with-input__label']}
                htmlFor={id}
            >{children}</label>
            <Input 
                id={id} 
                className={styles['label-with-input__input']}
                type={type} 
                name={name} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
};

export { LabelWithInput };
