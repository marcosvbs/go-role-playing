import { CharacterSheet } from "../../components/CharacterSheet";
import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import {
  RaceOptions,
  RaceSelectionBody,
  RaceSelectionContainer,
  RaceSelectionForm,
  SelectedRaceInfo,
} from "./styles";
import { races } from "../../data/races.json";
import { SkillCard } from "../../components/SkillCard";

export function RaceSelection() {
  const avaliableRaces = races;

  return (
    <>
      <Header />

      <RaceSelectionContainer>
        <h3>Passo 1: Escolha sua raça</h3>

        <RaceSelectionBody>
          <RaceSelectionForm>
            <RaceOptions>
              {avaliableRaces ? (
                avaliableRaces.map((race) => {
                  return (
                    <label key={race.id}>
                      <input type="radio" name={race.name} value={race.name} />
                      {race.name}
                    </label>
                  );
                })
              ) : (
                <></>
              )}
            </RaceOptions>

            <SelectedRaceInfo>
              <div className={"titleSection"}>
                <h4>Anões</h4>
              </div>

              <section className={"infoSection"}>
                <h5>Biologia</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  blandit quis diam pulvinar malesuada. Vivamus hendrerit luctus
                  gravida. Pellentesque non sapien nibh. Duis sodales ultricies
                  turpis nec egestas.
                </p>
              </section>

              <section className={"infoSection"}>
                <h5>Cultura</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  blandit quis diam pulvinar malesuada. Vivamus hendrerit luctus
                  gravida. Pellentesque non sapien nibh. Duis sodales ultricies
                  turpis nec egestas.
                </p>
              </section>

              <section className={"infoSection"}>
                <h5>Habilidade Automática</h5>
                <SkillCard
                  name={"Tanto faz 1"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis diam pulvinar malesuada. Vivamus hendrerit luctus gravida. Pellentesque non sapien nibh. Duis sodales ultricies turpis nec egestas."
                  }
                  category={"nenhuma"}
                  type={"nenhuma"}
                  mana={0}
                  difficulty={0}
                />
              </section>
            </SelectedRaceInfo>
          </RaceSelectionForm>

          <CharacterSheet />
        </RaceSelectionBody>
      </RaceSelectionContainer>

      <NavigationBar previousPage={"/"} nextPage={"/vocation-selection"} />
    </>
  );
}
