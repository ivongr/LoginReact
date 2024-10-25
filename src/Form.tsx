
import useForm from "./useForm"

function App(){

    const {handleChange,values, errors} = useForm();
    return(
     
        <form id="login-form" >
          <h1 className="title">Login</h1>
          <label>
            <i className="fa-solid fa-envelope" aria-label="Icon Email"></i>
            <input
              type="email"
              id="email"
              placeholder="Ej: SukiZukaritas@gmail.com"
              onChange={handleChange}
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
            
        
              required
            />
          </label>
          <button id="btnlogin" className="btn success pulse-effect shadow-effect" type="submit">
            Iniciar Sesión
          </button>

        </form>
      
    )
}