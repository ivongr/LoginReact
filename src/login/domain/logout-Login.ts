import { useSessionStore } from "./data-session";

export async function logoutLogin(
    setShowAlert: (show: boolean) => void,
    setAlertMessage: (message: string) => void
  ): Promise<void> {
    const { logout } = useSessionStore.getState();
    try {
     logout();
      setAlertMessage("¡Sesión cerrada con éxito!");
    } catch (error: any) {
      setAlertMessage("Error al cerrar la sesión");
    } finally {
      setShowAlert(true);
    }
  }