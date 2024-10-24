import { useForm } from "react-hook-form"

interface IFormInput {
    name: string,
    password: string,
}

export const Form: React.FC = () => {
    const {
        handleSubmit
    } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        console.log(data);
    };

    return(
     
        <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Login</h1>
          <label>
            <i className="fa-solid fa-envelope" aria-label="Icon Email"></i>
            <input
              type="email"
              id="email"
              placeholder="Ej: SukiZukaritas@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              id="password"
              aria-label="Icon Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button id="btnlogin" className="btn success pulse-effect shadow-effect" type="submit">
            Iniciar Sesión
          </button>
          {showAlert && <ShowAlert message={alertMessage} setShowAlert={setShowAlert} />}
        </form>
      
    )
}