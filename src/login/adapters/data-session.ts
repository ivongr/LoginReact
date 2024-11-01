import { container } from '../presentation/login-dependencies';


export async function dataSession(email: string, password: string): Promise<void> {
  const expiresFormatIso: any = container.get("expires-format-iso");
  const expiresLocal: any = container.get("expires-local");
  const encryptValue: any = container.get("encrypt-value")
  const passEnc = await encryptValue(password);
  const sessionData = {
    email,
    password: passEnc,
    expiresISO: expiresFormatIso(),
    expiresLocal: expiresLocal(),
  };
  localStorage.setItem("key", JSON.stringify(sessionData));
}
