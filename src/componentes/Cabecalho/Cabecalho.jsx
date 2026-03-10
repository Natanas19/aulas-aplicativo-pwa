import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="cabecalho__root">
      <img src="/logo.png" height="32" alt="Logo" />
      <div className="cabecalho_avatar">
            <Avatar nome="NA" /></div>
    </header>
  );
}

export default Cabecalho;