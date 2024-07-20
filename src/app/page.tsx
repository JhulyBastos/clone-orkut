"use client";
import { Search, ChevronDown } from "lucide-react";

import Image from "next/image";
import Logo from "../../public/img/logo.png";
import { useState } from "react";
import { InputProfile } from "@/components/Input";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { usuarios } from "@/data/usuarios";
import { useForm } from "react-hook-form";
import { Usuario } from "@/types/usuario";
import ProfileForm from "@/components/Forms/ProfileForm";
import { SearchInput } from "@/components/SearchInput";

export default function Home() {
  const router = useRouter();
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
          <form className="flex justify-center items-center gap-5">
            <button className="text-dark-10 hover:text-brand-color">
              Início
            </button>
            <button className="text-dark-10  hover:text-brand-color">
              Perfil
            </button>
            <button className="text-dark-10  hover:text-brand-color">
              Comunidades
            </button>
            <button className="text-dark-10  hover:text-brand-color">
              Jogos
            </button>
          </form>
        </nav>
        <div>
          <SearchInput />
        </div>
        <div className="flex items-center gap-4">
          {" "}
          <img
            className=" w-[40px] h-[40px] rounded-full "
            src="/img/perfil.jpg"
            alt="imagem de perfil"
          />
          <h1>Jhuly Bastos</h1>
          <ChevronDown color="#ED2590" />
        </div>
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
            {" "}
            biografia{" "}
          </div>
          <div className="flex flex-col gap-7">
            <div className=" bg-dark-40 w-full h-[399px] rounded-2xl">
              Amigos (248)
            </div>
            <div className=" bg-dark-40 w-full h-[399px] rounded-2xl">
              Comunidades (42)
            </div>
          </div>
        </div>
      </section>
      {isProfileModalOpen && (
        <ProfileForm closeProfileModal={closeProfileModal} />
      )}
    </div>
  );
}
