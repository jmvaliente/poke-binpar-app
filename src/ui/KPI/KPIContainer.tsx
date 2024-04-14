import type { KPIContainerProps, MapValuesKPI } from "~/types/pokemon";
import KPI from "./KPI";
import { MAP_VALUES } from "~/constants/KPIs/KPIs";

const KPIContainer = ({ value, children }: KPIContainerProps) => {
  const capitalizeValue = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  return (
    <div>
      <KPI
        value={capitalizeValue}
        unit={MAP_VALUES[value as keyof MapValuesKPI]}
      >
        {children}
      </KPI>
    </div>
  );
};

export default KPIContainer;
