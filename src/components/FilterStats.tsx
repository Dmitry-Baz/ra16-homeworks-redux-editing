import { useSelector } from "react-redux";
import { selectFilterStats } from "../selectors/servicesSelectors";

export default function FilterStats() {
  const { found, total } = useSelector(selectFilterStats);

  return (
    <div style={{ marginBottom: "16px", fontWeight: "bold", color: "#666" }}>
      Найдено: {found} из {total} услуг
    </div>
  );
}
