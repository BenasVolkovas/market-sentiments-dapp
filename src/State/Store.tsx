import { proxy } from "valtio";

export const store = proxy<{ modalToken: string; modalVisible: boolean }>({
    modalToken: "",
    modalVisible: false,
});
