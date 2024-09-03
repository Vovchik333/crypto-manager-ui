import { Asset } from "../../common/types";

const getFormattedCurrentPrice = ({ coin: { currentPrice } }: Asset): string =>  {
    return `$${currentPrice.toFixed(4)}`;
};

const getFormattedAvgPrice = ({ avgPrice }: Asset): string => {
    return `${avgPrice.toFixed(4)}`;
};

const getFormattedInvested = ({ invested }: Asset): string => {
    return `$${invested.toFixed(2)}`;
};

const getFormattedHoldings = ({ holdings, coin: { symbol } }: Asset): string => {
    return `${holdings.toFixed(2)} ${symbol}`
};

const getFormattedUsdHoldings = ({ holdings, coin: { currentPrice } }: Asset): string => {
    return `$${(holdings * currentPrice).toFixed(2)}`;
};

const getUsdProfit = ({ currentProfit }: Asset): string => {
    const sign = currentProfit < 0 ? '-' : '+';
    const absoluteCurrentProfit = Math.abs(currentProfit);

    return `${sign} $${(absoluteCurrentProfit).toFixed(2)}`;
};

const getPercentageProfit = ({ currentProfit, holdings, coin: { currentPrice }, invested }: Asset): string => {
    const sign = currentProfit < 0 ? '-' : '+';
    const percentageProfit = Math.abs((holdings * currentPrice * 100 / invested) - 100);

    return `${sign} ${percentageProfit.toFixed(2)} %`;
};

export { 
    getFormattedCurrentPrice,
    getFormattedAvgPrice,
    getFormattedInvested,
    getFormattedHoldings,
    getFormattedUsdHoldings,
    getUsdProfit,
    getPercentageProfit
};
