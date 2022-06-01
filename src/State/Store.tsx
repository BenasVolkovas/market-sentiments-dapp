import { proxy } from "valtio";

export type Token = {
    ticker: string;
    address: string;
    percentage: number;
    price: string;
};

export const store = proxy<{
    tokens: Token[];
}>({
    tokens: [],
});
