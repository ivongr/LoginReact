async function encryptValue(password:string):Promise <string> {
    const enconder = new TextEncoder();
    const data = enconder.encode(password);
    
    const key = await window.crypto.subtle.generateKey(
        {name: "AES-GCM",
        length: 256,
        },
        false,
        [ "encrypt"]
    );
    
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    
    const encryptedData= await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv,
        },
        key,
        data
    );
    
    
    return  btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
        
    }
    
    
    export { encryptValue};