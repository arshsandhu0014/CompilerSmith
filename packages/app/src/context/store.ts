import { atom, useAtom } from "jotai";

export const customInputAtom = atom("");
export const consoleOutputAtom = atom<any>("");
export const loadingConsoleOutputAtom = atom(false);
