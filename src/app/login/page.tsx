import Image from "next/image";
import Logo from "../../../public/img/logo.png";
import Vetor from "../../../public/img/Vector.svg";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* parte de cima */}
      <header className="flex justify-between items-center px-48 py-6">
        <Image src={Logo} alt="logo do orkut" width={100} height={50} />
        <nav>
          <ol className="flex justify-center items-center gap-5">
            <li className="text-dark-10">Sobre o Orkut</li>
            <li className="text-dark-10">Centro de segurança</li>
          </ol>
        </nav>
      </header>

      {/* parte do meio */}

      <section className="bg-dark-50 w-full h-full flex-1">
        <div className="flex justify-center items-center gap-[32px] w-full h-full ">
          <div className="w-[800px] h-[598px] bg-hero-pattern bg-cover relative">
            <p className="text-dark-40 text-[32px] absolute bottom-[56px] left-[56px]  w-[617px]">
              Conecta-se aos seus amigos e familiares usando recados e mensagens
              instantâneas
            </p>
          </div>
          <div className="bg-dark-40 w-[384px] h-[596px] rounded-2xl flex items-center flex-col py-[48px] px-[24px]">
            <Image src={Vetor} alt="logo do orkut" width={32} height={32} />
            <p className="text-brand-color text-[24px] font-semibold mb-10">
              Acesse o Orkut{" "}
            </p>
            <div className="space-y-6">
              <Input type="email" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
            </div>
            <div className="flex items-center w-full gap-3 mt-6">
              <input
                type="checkbox"
                id="rememberPassword"
                className=" size-4 appearance-none checked:bg-brand-color border rounded"
              />
              <label
                htmlFor="rememberPassword"
                className="text-dark-20 text-xs"
              >
                Lembrar minha senha
              </label>
            </div>
            <div className="space-y-6 mt-10">
              <Button>Entre na minha conta</Button>
              <Button variant="outline">Criar uma conta</Button>
            </div>
            <a href="#" className="text-brand-color text-xs underline mt-10">
              Esqueci minha senha
            </a>
          </div>
        </div>
      </section>

      {/* parte de baixo */}
      <footer className="flex justify-center items-center py-3">
        <p className="text-brand-color">Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
