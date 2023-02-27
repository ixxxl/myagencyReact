import { createContext, useContext } from "react";

export type GlobalContent = {
  lang: string;
  setLang: (c: string) => void;
};
export enum ELanguages {
  ro = "RO",
  ru = "RU",
}
export const MyGlobalContext = createContext<GlobalContent>({
  lang: "", // set a default value
  setLang: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
