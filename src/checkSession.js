export const checkSession = () => {
    const item = localStorage.getItem("key");
    if (item) {
        const sessionData = JSON.parse(item);
        const expirationTime = sessionData.expiresLocal;
        const now = new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" });

        if (now >= expirationTime) {
            localStorage.removeItem("key");
            alert('Sesión terminada');
        }
    }
};
