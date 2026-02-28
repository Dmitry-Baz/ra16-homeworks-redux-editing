// src/components/ServiceList.tsx
import { useSelector } from "react-redux";
import { selectFilteredServices } from "../selectors/servicesSelectors";
import ServiceItem from "./ServiceItem";

export default function ServiceList() {
  const filteredServices = useSelector(selectFilteredServices);

  return (
    <div>
      {filteredServices.length === 0 ? (
        <p style={{ color: "#999", textAlign: "center", padding: "20px" }}>
          Услуги не найдены
        </p>
      ) : (
        <div>
          {filteredServices.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}
