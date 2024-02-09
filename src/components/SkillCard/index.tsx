import { SkillCardBody, SkillCardContainer, SkillCardHeader } from "./styles";

interface SkillCardProps {
  name: string;
  description: string;
  category: string;
  type: string;
  mana: number;
  difficulty: number;
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
          <div>
            <span>{mana}</span>
            <span>Mana</span>
          </div>

          <div>
            <span>{difficulty}</span>
            <span>Difficult</span>
          </div>
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
