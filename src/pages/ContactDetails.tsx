import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FormBuilder from "@/components/molecules/FormBuilder";
import { Button } from "@/components/atoms/button";
import { setContactDetails } from "@/store/userSlice";

const ContactDetails = () => {
  const data = useSelector((state: any) => state.portfolio.contactDetails);
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: data,
  });
  const navigate = useNavigate();
  const previous = () => {
    navigate(-1);
  };
  const next = () => {
    navigate("/portfolio/skills");
  };
  return (
    <div className="w-full">
      <h1 className="mb-4 text-3xl font-bold text-primary">Contact Details</h1>
      <FormBuilder
        form={form}
        onValueChange={(name, value) => {
          dispatch(setContactDetails({ ...data, [name]: value }));
        }}
        fields={[
          {
            type: "text",
            name: "email",
            label: "Email",
            required: true,
          },
          {
            type: "text",
            name: "phone_number",
            label: "Phone Number",
            required: true,
          },
          {
            type: "text",
            name: "line",
            label: "Address Line",
            required: true,
          },
          {
            type: "text",
            name: "city",
            label: "City",
            required: true,
          },
          {
            type: "text",
            name: "country",
            label: "Country",
            required: true,
          },
        ]}
        onSubmit={() => {}}
      >
        <div className="flex justify-between">
          <Button className="w-[100px]" onClick={previous}>
            Previous
          </Button>
          <Button className="w-[100px]" onClick={next}>
            Next
          </Button>
        </div>
      </FormBuilder>
    </div>
  );
};

export default ContactDetails;
