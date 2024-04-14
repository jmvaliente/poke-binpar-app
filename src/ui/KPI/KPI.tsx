import type { KPIProps } from "~/types/pokemon";

const KPI = ({ value, unit, children }: KPIProps) => {
  return (
    <p>
      <span className="font-semibold">{value}:</span> {children} {unit}
    </p>
  );
};

export default KPI;
