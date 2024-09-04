import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import FormBuilder from "@/components/molecules/FormBuilder";
import { Button } from "@/components/atoms/button";

const BasicDetails = () => {
  const form = useForm();
  const navigate = useNavigate();
  const next = () => {
    navigate("/portfolio/contact");
  };
  return (
    <div className="w-full">
      <h1 className="mb-4 text-3xl font-bold text-primary">Basic Details</h1>
      <FormBuilder
        form={form}
        fields={[
          {
            type: "text",
            name: "first_name",
            label: "First Name",
            required: true,
          },
          {
            type: "text",
            name: "last_name",
            label: "Last Name",
            required: true,
          },
          {
            type: "text",
            name: "mother_name",
            label: "Mother's Name",
            required: true,
          },
          {
            type: "text",
            name: "father_name",
            label: "Father's Name",
            required: true,
          },
        ]}
        onSubmit={() => {}}
      >
        <Button className="w-[100px]" onClick={next}>
          Next
        </Button>
      </FormBuilder>
    </div>
  );
};

export default BasicDetails;
