"use client";
import { Search, ChevronDown, LogOut } from "lucide-react";

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
import { CardBiografia } from "@/components/Biografia";
import CardFriends from "@/components/Friends";
import CardCommunity from "@/components/Community";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

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
          <NavigationMenu.Root className="relative z-[1] flex justify-center">
            <NavigationMenu.List className="font-manrope flex gap-16 text-black">
              <NavigationMenu.Item className="flex items-center gap-1">
                <NavigationMenu.Trigger className="relative flex items-center gap-1 group hover:text-dark-30 ">
                  <ChevronDown
                    color="#ED2590"
                    className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className=" xl:w-auto xl:h-auto bg-white drop-shadow-md  mt-4  text-black  items-center rounded-xl w-[167px] h-11 absolute top-[80%]">
                  <ul className="flex flex-col  gap-1 py-2 mr-14 ml-4">
                    <li>Perfil</li>
                    <li>Amigos</li>
                    <li>Comunidade</li>
                    <li>Configuração</li>
                    <li className="flex items-center gap-1">
                      Sair <LogOut className="size-4" />
                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
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
          <div>
            <CardBiografia />
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <CardFriends />
            </div>
            <div>
              <CardCommunity />
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
