import { ReactNode, createContext, useState } from "react";

interface StepsSelectionContextType {
  selectedRaceId: number;
  selectedVocationId: number;
  updateSelectedRaceId: (raceId: number) => void;
  updateSelectedVocationId: (vocationId: number) => void;
}

export const StepsSelectionContext = createContext(
  {} as StepsSelectionContextType
);

export function StepsSelectionContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedRaceId, setSelectedRaceId] = useState(0);
  const [selectedVocationId, setSelectedVocationId] = useState(0);

  function updateSelectedRaceId(raceId: number) {
    setSelectedRaceId(raceId);
  }

  function updateSelectedVocationId(vocationId: number) {
    setSelectedVocationId(vocationId);
  }

  return (
    <StepsSelectionContext.Provider
      value={{
        selectedRaceId,
        selectedVocationId,
        updateSelectedRaceId,
        updateSelectedVocationId,
      }}
    >
      {children}
    </StepsSelectionContext.Provider>
  );
}
