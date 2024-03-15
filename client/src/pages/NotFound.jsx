import { NavLink } from "react-router-dom";

function notFound() {
  return (
    <section>
      <h1>Page Not found!</h1>
      <NavLink to="/">
        <button>Return Home</button>
      </NavLink>
    </section>
  );
}

export default notFound;
