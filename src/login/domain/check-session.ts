export const checkSession = () => {
    const item = localStorage.getItem('session-storage');

    if (item) {
        const sessionData = JSON.parse(item);
        const expirationTime = sessionData.expirationDate;
        const now = new Date();
        const nowDate = new Date(now).toISOString();

        if (nowDate  >= expirationTime) {
            localStorage.removeItem('session-storage');
            alert('Sesión terminada');
        }
    }
};

