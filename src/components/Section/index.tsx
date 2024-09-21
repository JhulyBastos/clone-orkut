import { useRouter } from "next/navigation";
import { CardBiografia } from "../Biografia";
import CardCommunity from "../Community";
import CardFriends from "../Friends";
import { useState } from "react";
import ProfileForm from "../Forms/ProfileForm";

export default function Section() {
  const router = useRouter();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  function openProfileModal() {
    setIsProfileModalOpen(true);
  }

  function closeProfileModal() {
    setIsProfileModalOpen(false);
  }
  return (
    <div>
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
