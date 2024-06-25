"use client";
import { Search } from "lucide-react";

import Image from "next/image";
import Logo from "../../public/img/logo.png";

export default function Home() {
  return (
    <div>
      {/* parte de cima */}
      <header className="flex justify-between items-center px-48 py-6 bg-dark-40">
        <Image src={Logo} alt="logo do orkut" width={100} height={50} />
        <nav>
          <ol className="flex justify-center items-center gap-5">
            <li className="text-dark-10">Início</li>
            <li className="text-dark-10">Perfil</li>
            <li className="text-dark-10">Comunidades</li>
            <li className="text-dark-10">Jogos</li>
          </ol>
        </nav>
      </header>
      <section className="bg-dark-50 w-full h-full">
        <div className="flex justify-center gap-8 py-20">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col justify-center items-center bg-dark-40 w-[280px] h-[312px] rounded-2xl ">
              <img
                className="w-[170px] h-[170px] rounded-full border-[3px] border-brand-color p-1"
                src="/img/perfil.jpg"
                alt="imagem de perfil"
              />
              <h1 className="mt-6 text-lg">Jhuly Bastos</h1>
              <p className="text-xs text-dark-10">Minas Gerais, Brasil</p>
            </div>
            <div className=" bg-dark-40 w-[280px] h-[56px] rounded-2xl flex items-center justify-center">
              <h1 className="text-brand-color text-lg">Editar meu perfil</h1>
            </div>
          </div>
          <div className=" bg-dark-40 w-[700px] h-[900px] rounded-2xl"></div>
          <div className="flex flex-col gap-7">
            <div className=" bg-dark-40 w-[280px] h-[399px] rounded-2xl"></div>
            <div className=" bg-dark-40 w-[280px] h-[399px] rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
