import { useDispatch } from "react-redux";
import { startEditing } from "../store/formSlice";
import { deleteService } from "../store/servicesSlice";
import type { Service } from "../types";

interface Props {
  service: Service;
}

export default function ServiceItem({ service }: Props) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      startEditing({ id: service.id, name: service.name, price: service.price })
    );
  };

  const handleDelete = () => {
    dispatch(deleteService(service.id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        borderBottom: "1px solid #eee",
      }}
    >
      <div>
        <strong>{service.name}</strong>
        <span style={{ marginLeft: "16px", color: "#666" }}>
          — {service.price.toFixed(2)} ₽
        </span>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={handleEdit}
          title="Редактировать"
          style={{
            background: "none",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            color: "#0d6efd",
          }}
        >
          ✎
        </button>
        <button
          onClick={handleDelete}
          title="Удалить"
          style={{
            background: "none",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            color: "#d32f2f",
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
