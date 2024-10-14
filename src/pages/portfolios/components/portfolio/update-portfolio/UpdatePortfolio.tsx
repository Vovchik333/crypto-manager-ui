import { useState } from "react";
import { Button, FormTemplate } from "@/lib/components";
import { ButtonType } from "@/lib/enums/components";
import { useAppDispatch } from "@/lib/hooks";
import { updatePortfolio } from "@/store/portfolio/actions";
import { Portfolio } from "@/common/types";
import { PortfolioFormInfo } from "../portfolio-form-components";
import styles from './styles.module.scss';

type Props = {
    portfolio: Portfolio;
    onClose: () => void;
}

const UpdatePortfolio: React.FC<Props> = ({
    portfolio,
    onClose
}) => {
    const dispatch = useAppDispatch();
    const [portfolioForUpdate, setPortfolioForUpdate] = useState<Portfolio>({
        ...portfolio
    });

    const { name } = portfolioForUpdate;

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPortfolioForUpdate(prev => ({
            ...prev,
            name: event.target.value
        }));
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (name.length > 0) {
            await dispatch(updatePortfolio({ _id: portfolioForUpdate._id, name: portfolioForUpdate.name }));

            setPortfolioForUpdate(prev => ({
                ...prev,
                name: ''
            }));

            onClose();
        }
    }

    return (
        <FormTemplate 
            className={styles["update-portfolio-template"]}
            topic="Edit portfolio" 
            onClose={onClose}
        >
            <form 
                className={styles["portfolio-form"]} 
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
                >Update</Button>
            </form>
        </FormTemplate>
    );
}

export { UpdatePortfolio };
