// expires.js
const expiresDateFormatIso = () :string => {
    const globaltime = new Date()
   
    return  new Date(globaltime.getTime() +  2 * 60 * 60 * 1000 ).toISOString();
};

const expiresDateLocal = ():string => {
    const globaltime = new Date();

    const expiresLocal = new Date(globaltime.getTime() + 2 * 60 * 60 * 1000 );
    
    return expiresLocal.toLocaleString("es-MX", { timeZone: "America/Mexico_City" }); // Formato local
};

export { expiresDateFormatIso, expiresDateLocal };
