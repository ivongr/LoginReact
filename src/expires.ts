// expires.js
const expiresFormatIso = () :string => {
    const globaltime = new Date()
   
    
    globaltime.setHours(globaltime.getHours() - 6); // Hora México
  
    return  new Date(globaltime.getTime() +  2 * 60 * 60 * 1000 ).toISOString();
};

const expiresLocal = ():any => {
    const globaltime = new Date();

    const expiresLocal = new Date(globaltime.getTime() + 2 * 60 * 60 * 1000 );
    
    return expiresLocal.toLocaleString("es-MX", { timeZone: "America/Mexico_City" }); // Formato local
};

export { expiresFormatIso, expiresLocal };
