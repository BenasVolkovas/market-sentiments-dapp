import { proxy } from "valtio";
import { Token } from "./Types";

export const store = proxy<{
    tokens: Token[];
}>({
    tokens: [],
});
