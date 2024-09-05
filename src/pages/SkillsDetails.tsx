import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import FormBuilder from "@/components/molecules/FormBuilder";
import { Button } from "@/components/atoms/button";

const SkillDetails = () => {
  const form = useForm();
  const navigate = useNavigate();
  const previous = () => {
    navigate(-1);
  };
  return (
    <div className="w-full">
      <h1 className="mb-4 text-3xl font-bold text-primary">Skills</h1>
      <FormBuilder
        form={form}
        fields={[
          {
            type: "text",
            name: "skills",
            label: "Skills",
            required: true,
          },
          {
            type: "text",
            name: "languages",
            label: "Languages",
            required: true,
          },
          {
            type: "text",
            name: "hobbies",
            label: "Hobbies",
            required: true,
          },
        ]}
        onSubmit={() => {}}
      >
        <Button className="w-[100px]" onClick={previous}>
          Previous
        </Button>
      </FormBuilder>
    </div>
  );
};

export default SkillDetails;
