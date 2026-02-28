import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, clearSearch } from "../store/filterSlice";
import type { RootState } from "../types";

export default function SearchFilter() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.filter.searchTerm);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClear = () => {
    dispatch(clearSearch());
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{ position: "relative", display: "inline-block", width: "100%" }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Поиск услуг..."
          value={searchTerm}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px 40px 10px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              color: "#999",
            }}
            aria-label="Очистить поиск"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
