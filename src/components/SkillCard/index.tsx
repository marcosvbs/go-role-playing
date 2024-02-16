import { SkillCardBody, SkillCardContainer, SkillCardHeader } from "./styles";

interface SkillCardProps {
  skill: {
    name: string;
    description: string;
    category: string | null;
    type: string;
    mana: string | number | null;
    difficulty: string | number | null;
    requirement: string | null;
  };
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <SkillCardContainer>
      <SkillCardHeader>
        <div className={"skillCategoryAndType"}>
          <span>
            {skill.category} - {skill.type}
          </span>
        </div>

        <div className={"skillInfo"}>
          {skill.mana ? (
            <div>
              <span>{skill.mana}</span>
              <span>Mana</span>
            </div>
          ) : (
            <div></div>
          )}

          {skill.difficulty ? (
            <div>
              <span>{skill.difficulty}</span>
              <span>Difficult</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </SkillCardHeader>

      <SkillCardBody>
        <div>
          <h5>{skill.name}</h5>
        </div>

        <div>
          <p>{skill.description}</p>
        </div>
      </SkillCardBody>
    </SkillCardContainer>
  );
}
