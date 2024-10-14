import { useState } from "react";
import { Button, FormTemplate } from "@/lib/components";
import { ButtonType } from "@/lib/enums/components";
import { useAppDispatch } from "@/lib/hooks";
import { createPortfolio } from "@/store/portfolio/actions";
import { PortfolioFormInfo } from "../portfolio-form-components";
import styles from './styles.module.scss';
import { PortfolioRequestData } from "@/common/types";

type Props = {
    onClose: () => void;
}

const CreatePortfolio: React.FC<Props> = ({
    onClose
}) => {
    const dispatch = useAppDispatch();
    const [portfolio, setPortfolio] = useState<PortfolioRequestData>({
        name: ''
    });

    const { name } = portfolio;

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPortfolio(prev => ({
            ...prev,
            name: event.target.value
        }));
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (name.length > 0) {
            await dispatch(createPortfolio(portfolio));

            setPortfolio(prev => ({
                ...prev,
                name: ''
            }));

            onClose();
        }
    }

    return (
        <FormTemplate 
            className={styles['create-portfolio-template']}
            topic="Creating a new portfolio" 
            onClose={onClose}
        >
            <form 
                className={styles['portfolio-form']} 
                onSubmit={handleSubmit}
            >
                <PortfolioFormInfo 
                    name={name} 
                    onChangeName={handleChangeName} 
                />
                <Button 
                    className={styles['portfolio-form__submit-button']} 
                    type={ButtonType.SUBMIT}
                    isPrimary
                >Create</Button>
            </form>
        </FormTemplate>
    );
}

export { CreatePortfolio };