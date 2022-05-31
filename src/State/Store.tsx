import { proxy } from "valtio";

export type Token = {
    ticker: string;
    address: string;
    percentage: number;
    price: string | undefined;
};

export const store = proxy<{
    modalToken: string;
    modalVisible: boolean;
    modalPrice: number;
    tokens: Token[];
}>({
    modalToken: "",
    modalVisible: false,
    modalPrice: 0,
    tokens: [],
});
