import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FormBuilder from "@/components/molecules/FormBuilder";
import { Button } from "@/components/atoms/button";
import { setSkills } from "@/store/userSlice";

const SkillDetails = () => {
  const data = useSelector((state: any) => state.portfolio.skills);
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: data,
  });
  const navigate = useNavigate();
  const previous = () => {
    navigate(-1);
  };
  return (
    <div className="w-full">
      <h1 className="mb-4 text-3xl font-bold text-primary">Skills</h1>
      <FormBuilder
        onValueChange={(name, value) => {
          dispatch(setSkills({ ...data, [name]: value }));
        }}
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
          {
            name: "summary",
            label: "Summary",
            required: true,
            type: "text",
            className: "h-[100px]",
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
