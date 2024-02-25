import { Link } from "../../components/Link";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <div>
          <p>
            O Go Role Playing foi desenvolvido para simplificar e agilizar a
            criação de personagens de RPG de mesa, auxiliando os jogadores a
            desenvolverem seus personagens de maneira intuitiva, dentro das
            regras do sistema Mighty Blade.
          </p>
          <Link
            label={"Criar personagem"}
            type={"contained"}
            destination={"/race-selection"}
          />
        </div>
      </HomeContainer>
    </>
  );
}
