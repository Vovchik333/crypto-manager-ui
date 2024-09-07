import { LabelWithInput } from "@/lib/components";
import { User } from "@/common/types";
import { TextInputType } from "@/lib/enums/components";

type Props = {
    user: User;
    onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const EmailWithPassword: React.FC<Props> = ({
    user,
    onChangeEmail,
    onChangePassword
}) => {
    return (
        <>
            <LabelWithInput
                id="email" 
                type={TextInputType.EMAIL} 
                name="email" 
                placeholder="Type email..."
                value={user.email} 
                onChange={onChangeEmail} 
            >Email:</LabelWithInput>
            <LabelWithInput
                id="password" 
                type={TextInputType.PASSWORD} 
                name="password" 
                placeholder="Type password..."
                value={user.password} 
                onChange={onChangePassword} 
            >Password:</LabelWithInput>
        </>
    );
}

export { EmailWithPassword };
