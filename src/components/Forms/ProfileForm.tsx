import { useForm } from "react-hook-form";
import { InputProfile } from "../Input";
import { Usuario } from "@/types/usuario";
import { Button } from "../Button";
interface ProfileFormProps {
  closeProfileModal: () => void;
}

export default function ProfileForm({ closeProfileModal }: ProfileFormProps) {
  const metodos = useForm({
    defaultValues: {
      bio: "",
      relacionamento: "",
      aniversario: 0,
      idade: 0,
      filhos: 0,
      sexo: "",
      profissao: "",
      Estado: "",
      Cidade: "",
      Musica: "",
      Filmes: "",
    },
  });

  function onSubmit(payload: Usuario) {
    closeProfileModal();
  }

  return (
    <div className="w-full h-screen fixed inset-0 bg-black/60 flex justify-center py-5 px-10 ">
      <div className="w-full max-w-4xl h-full rounded-xl py-5 px-6 bg-dark-40 overflow-auto">
        <h1 className="text-brand-color text-lg mb-4">Editar meu perfil</h1>
        <div>
          <form
            onSubmit={metodos.handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
            action=""
          >
            <p className="text-black/90 text-lg">Sobre você:</p>
            <InputProfile
              {...metodos.register("bio")}
              placeholder="Digite aqui"
            />
            <p className="text-black/90 text-lg">Relacionamento:</p>
            <InputProfile
              {...metodos.register("relacionamento")}
              placeholder="Digite aqui"
            />

            <p className="text-black/90 text-lg">Aniversário:</p>
            <InputProfile
              {...metodos.register("aniversario")}
              placeholder="Digite aqui"
            />

            <p className="text-black/90 text-lg">Idade:</p>
            <InputProfile
              {...metodos.register("idade")}
              placeholder="Digite aqui"
            />

            <p className="text-black/90 text-lg">Filhos:</p>
            <InputProfile
              {...metodos.register("filhos")}
              placeholder="Digite aqui"
            />

            <p className="text-black/90 text-lg">Sexo:</p>
            <InputProfile
              {...metodos.register("sexo")}
              placeholder="Digite aqui"
            />

            <p className="text-black/90 text-lg">profissão:</p>
            <InputProfile
              {...metodos.register("profissao")}
              placeholder="Digite aqui"
            />

            <p className="text-black/90 text-lg">Estado:</p>
            <InputProfile
              {...metodos.register("Estado")}
              placeholder="Digite aqui"
            />

            <p className="text-black/90 text-lg">Cidade:</p>
            <InputProfile
              {...metodos.register("Cidade")}
              placeholder="Digite aqui"
            />

            <p className="text-black/90 text-lg">Música:</p>
            <InputProfile
              {...metodos.register("Musica")}
              placeholder="Digite aqui"
            />

            <p className="text-black/90 text-lg">Filmes:</p>
            <InputProfile
              {...metodos.register("Filmes")}
              placeholder="Digite aqui"
            />
            <div className="flex justify-start mt-16 gap-4">
              <Button type="submit">Salvar</Button>
              <Button variant="outline" onClick={closeProfileModal}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
