"use client";
import { Search } from "lucide-react";

import Image from "next/image";
import Logo from "../../public/img/logo.png";
import { useState } from "react";
import { InputProfile } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Home() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  function openProfileModal() {
    setIsProfileModalOpen(true);
  }

  function closeProfileModal() {
    setIsProfileModalOpen(false);
  }
  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* parte de cima */}
      <header className=" w-full flex justify-between items-center px-40 py-6 bg-dark-40">
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
        <div className="flex justify-between gap-8 px-40 py-20">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col justify-center items-center bg-dark-40  w-[250px] h-[300px] rounded-2xl ">
              <img
                className=" w-[170px] h-[170px] rounded-full border-[3px] border-brand-color p-1"
                src="/img/perfil.jpg"
                alt="imagem de perfil"
              />
              <h1 className="mt-6 text-lg">Jhuly Bastos</h1>
              <p className="text-xs text-dark-10">Minas Gerais, Brasil</p>
            </div>

            <div className=" bg-dark-40 w-[250px] h-[50px] rounded-2xl flex items-center justify-center">
              <button
                onClick={openProfileModal}
                type="button"
                className="text-brand-color text-lg"
              >
                Editar meu perfil
              </button>
            </div>
          </div>
          <div className=" bg-dark-40 w-full h-screen rounded-2xl">
            dsadsdad
          </div>
          <div className="flex flex-col gap-7">
            <div className=" bg-dark-40 w-full h-[399px] rounded-2xl">
              dsadsadsad
            </div>
            <div className=" bg-dark-40 w-full h-[399px] rounded-2xl">
              dsdsadsa
            </div>
          </div>
        </div>
      </section>
      {isProfileModalOpen && (
        <div className="w-full h-screen fixed inset-0 bg-black/60 flex justify-center py-5 px-10 ">
          <div className="w-full h-full rounded-xl py-5 px-6 bg-dark-40 overflow-auto">
            <h1 className="text-brand-color text-lg mb-4">Editar meu perfil</h1>
            <div>
              <form className="flex flex-col gap-3" action="">
                <p className="text-black/90 text-lg">Sobre você:</p>
                <InputProfile placeholder="Digite aqui" />
                <p className="text-black/90 text-lg">Relacionamento:</p>
                <InputProfile placeholder="Digite aqui" />

                <p className="text-black/90 text-lg">Aniversário:</p>
                <InputProfile placeholder="Digite aqui" />

                <p className="text-black/90 text-lg">Idade:</p>
                <InputProfile placeholder="Digite aqui" />

                <p className="text-black/90 text-lg">Filhos:</p>
                <InputProfile placeholder="Digite aqui" />

                <p className="text-black/90 text-lg">Sexo:</p>
                <InputProfile placeholder="Digite aqui" />

                <p className="text-black/90 text-lg">profissão:</p>
                <InputProfile placeholder="Digite aqui" />

                <p className="text-black/90 text-lg">Estado:</p>
                <InputProfile placeholder="Digite aqui" />

                <p className="text-black/90 text-lg">Cidade:</p>
                <InputProfile placeholder="Digite aqui" />

                <p className="text-black/90 text-lg">Música:</p>
                <InputProfile placeholder="Digite aqui" />

                <p className="text-black/90 text-lg">Filmes:</p>
                <InputProfile placeholder="Digite aqui" />
              </form>
              <div className="flex justify-start mt-16 gap-4">
                <Button>Salvar</Button>
                <Button variant="outline"> Cancelar</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
