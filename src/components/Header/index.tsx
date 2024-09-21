"use client";
import Image from "next/image";
import Logo from "../../../public/img/logo.png";
import { SearchInput } from "../SearchInput";
import { Cog, ChevronDown, LogOut, User } from "lucide-react";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProfileForm from "../Forms/ProfileForm";

export default function Header() {
  const router = useRouter();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  function openProfileModal() {
    setIsProfileModalOpen(true);
  }

  function closeProfileModal() {
    setIsProfileModalOpen(false);
  }

  return (
    <div className="w-full h-screen ">
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
                  <ul className="flex flex-col text-dark-10  gap-1 py-2 mr-14 ml-4">
                    <button onClick={openProfileModal}>
                      <li className="flex items-center gap-1  hover:text-brand-color">
                        Perfil <User className="size-4" />
                      </li>
                    </button>
                    <button>
                      <li className="flex items-center gap-1  hover:text-brand-color">
                        Configuração
                        <Cog className="size-[18px]" />
                      </li>
                    </button>
                    <button onClick={() => router.push("/login")}>
                      <li className="flex items-center gap-1  hover:text-brand-color">
                        Sair <LogOut className="size-4" />
                      </li>
                    </button>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </header>
      {isProfileModalOpen && (
        <ProfileForm closeProfileModal={closeProfileModal} />
      )}
    </div>
  );
}
