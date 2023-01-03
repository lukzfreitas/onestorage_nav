const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light bg-light"
    style={{ height: "8vh" }}
  >
    <div id="title" className="navbar-brand">
      {" "}
      Sistema XPTO{" "}
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">{/* Todo: Add menu itens*/}</ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Pesquisar"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Buscar
        </button>
      </form>
    </div>
  </nav>
);

export default NavBar;
