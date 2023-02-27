import { createContext, useContext } from "react";

export type GlobalContent = {
  lang: string;
  setLang: (c: string) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  lang: "", // set a default value
  setLang: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
