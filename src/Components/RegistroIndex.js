import react from "react";
import "../Styles/RegistroIndex.css";

export const RegistroIndex = () => {
  return (
    <div className="Registro  py-5 text-center mb-4">
      <form className="form-signin">
        <h1 class="h3 mb-3 font-weight-normal"> click </h1>
        <label for="inputEmail" class="sr-only">
          gmail
        </label>

        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required=""
        />
        <div class="checkbox mb-2">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>

        <button class="btn btn-lg btn-primary btn-block " type="submit">
          Sign in
        </button>
        <p class="mt-2 mb-3 text-muted"> Hecho en el 2020 </p>
      </form>
    </div>
  );
};
