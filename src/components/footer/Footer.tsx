import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import AuthContext from "../../contexts/authContext";
import { ReactNode, useContext } from "react";

function Footer() {
  let data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="flex justify-center bg-black text-white">
        <div className="container flex flex-col place-items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal Generation | Copyright: {data}{" "}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogo size={48} weight="bold" />
            <InstagramLogo size={48} weight="bold" />
            <FacebookLogo size={48} weight="bold" />
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Footer;
