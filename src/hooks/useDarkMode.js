import useLocalStorage from "./useLocalStorage";
const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("dark", true);
};
