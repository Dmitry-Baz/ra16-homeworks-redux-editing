import { useSelector } from "react-redux";
import type { RootState } from "../types";
import ServiceItem from "./ServiceItem";

export default function ServiceList() {
  const services = useSelector((state: RootState) => state.services.items);

  return (
    <div>
      <div style={{ marginBottom: "16px", fontWeight: "bold" }}>
        Всего услуг: {services.length}
      </div>
      {services.length === 0 ? (
        <p style={{ color: "#999", textAlign: "center", padding: "20px" }}>
          Нет услуг. Добавьте первую.
        </p>
      ) : (
        <div>
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}
