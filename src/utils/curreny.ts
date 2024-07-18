import storage from "./storage"

export const getCurrency = (currency: number) => {
    let currencySymbol = storage.getItem("currencySymbol") || "₹";

    if (!currency) {
        return `${currencySymbol}0`;
    }
    return `${currencySymbol}${currency}`;
}

