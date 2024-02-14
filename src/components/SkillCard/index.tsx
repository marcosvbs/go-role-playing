import { SkillCardBody, SkillCardContainer, SkillCardHeader } from "./styles";

interface SkillCardProps {
  name: string;
  description: string;
  category: string | null;
  type: string;
  mana: string | number | null;
  difficulty: string | number | null;
}

export function SkillCard({
  name,
  description,
  category,
  type,
  mana,
  difficulty,
}: SkillCardProps) {
  return (
    <SkillCardContainer>
      <SkillCardHeader>
        <div className={"skillCategoryAndType"}>
          <span>
            {category} - {type}
          </span>
        </div>

        <div className={"skillInfo"}>
          {mana ? (
            <div>
              <span>{mana}</span>
              <span>Mana</span>
            </div>
          ) : (
            <div></div>
          )}

          {difficulty ? (
            <div>
              <span>{difficulty}</span>
              <span>Difficult</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </SkillCardHeader>

      <SkillCardBody>
        <div>
          <h5>{name}</h5>
        </div>

        <div>
          <p>{description}</p>
        </div>
      </SkillCardBody>
    </SkillCardContainer>
  );
}
