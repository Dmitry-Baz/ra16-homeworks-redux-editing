import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../types";
import {
  setFormField,
  cancelEditing,
  clearForm,
  setValidationError,
  clearValidationError,
} from "../store/formSlice";
import { addService, updateService } from "../store/servicesSlice";

export default function ServiceForm() {
  const dispatch = useDispatch();
  const { name, price, editingId, errors } = useSelector(
    (state: RootState) => state.form
  );

  const validate = (): boolean => {
    let isValid = true;

    if (!name.trim() || name.trim().length < 2) {
      dispatch(
        setValidationError({ field: "name", error: "Минимум 2 символа" })
      );
      isValid = false;
    } else {
      dispatch(clearValidationError("name"));
    }

    const numPrice = parseFloat(price);
    if (isNaN(numPrice) || numPrice <= 0) {
      dispatch(
        setValidationError({ field: "price", error: "Должно быть числом > 0" })
      );
      isValid = false;
    } else {
      dispatch(clearValidationError("price"));
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const numPrice = parseFloat(price);

    if (editingId) {
      dispatch(
        updateService({ id: editingId, name: name.trim(), price: numPrice })
      );
    } else {
      dispatch(addService({ name: name.trim(), price: numPrice }));
    }

    dispatch(clearForm());
  };

  const handleCancel = () => {
    dispatch(cancelEditing());
  };

  return (
    <div
      style={{
        marginBottom: "24px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h3>{editingId ? "Редактирование услуги" : "Добавление услуги"}</h3>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label>Название услуги</label>
          <input
            type="text"
            value={name}
            onChange={(e) =>
              dispatch(setFormField({ field: "name", value: e.target.value }))
            }
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "4px",
              border: errors.name ? "1px solid #d32f2f" : "1px solid #ccc",
            }}
          />
          {errors.name && (
            <p style={{ color: "#d32f2f", fontSize: "12px", marginTop: "4px" }}>
              {errors.name}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Цена</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) =>
              dispatch(setFormField({ field: "price", value: e.target.value }))
            }
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "4px",
              border: errors.price ? "1px solid #d32f2f" : "1px solid #ccc",
            }}
          />
          {errors.price && (
            <p style={{ color: "#d32f2f", fontSize: "12px", marginTop: "4px" }}>
              {errors.price}
            </p>
          )}
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              style={{
                padding: "8px 16px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
