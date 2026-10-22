import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(() => {

        const savedTheme =
            localStorage.getItem("theme");

        return savedTheme === "dark";
    });

    useEffect(() => {

        if (darkMode) {

            document.body.classList.add("dark-theme");

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            document.body.classList.remove(
                "dark-theme"
            );

            localStorage.setItem(
                "theme",
                "light"
            );
        }

    }, [darkMode]);


    function toggleTheme() {

        setDarkMode(
            previous => !previous
        );

    }


    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}


export function useTheme() {

    return useContext(ThemeContext);

}