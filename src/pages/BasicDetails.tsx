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
    <div className="h-screen w-full overflow-auto py-10">
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
            name: "birth_date",
            label: "Birth Date",
            required: true,
          },
          {
            type: "text",
            name: "gender",
            label: "Gender",
            required: true,
          },
          {
            type: "text",
            name: "nationality",
            label: "Nationality",
            required: true,
          },
          {
            type: "text",
            name: "marital_status",
            label: "Marital Status",
            required: false,
          },
          {
            type: "text",
            name: "occupation",
            label: "Occupation",
            required: true,
          },
          {
            type: "text",
            name: "company",
            label: "Company",
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
