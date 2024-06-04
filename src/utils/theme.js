/* apply the .class in "arg" to the entire document and store the .class in LocalStorage */
export function setTheme(themeName) {
    localStorage.setItem("theme", themeName)
    document.documentElement.className = themeName
}
/* apply the light .class to document and add it to Local by default IF no .class already in LocalStorage */
export function keepTheme() {
    if(localStorage.getItem("theme")) {
        if(localStorage.getItem("theme") === "theme--dark") {
            setTheme("theme--dark")
        } else if (localStorage.getItem("theme") === "theme--light") {
            setTheme("theme--light")
        } else {
            setTheme("theme--dark")
        }
    } else {
        setTheme("theme--light")
    }
}

