import React from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onChange?: (value: string) => void;
  selectedValue?: string;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange = () => {},
  selectedValue,
  placeholder,
}) => {
  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "100%",
          fontSize: 25,
        }}
      >
        <option value="">{placeholder || "Select an option"}</option>
        {options?.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

// const CATEGORIES = ["t-shirt", "sweater", "pants", "dress"];
