import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import * as Yup from "yup";

// Define the type for a user row
// interface UserRow {
//   firstName: string;
//   lastName: string;
//   email: string;
//   errors?: { firstName?: string; lastName?: string; email?: string }; // Add errors property
// }

const schema = Yup.object({
  users: Yup.array().of(
    Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("invalid email").required("Email is required"),
    }),
  ),
});

const AddUsersTable: React.FC = () => {
  const { control, register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log("formState: ", formState.touchedFields);
  const { fields, prepend, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "users", // unique name for your Field Array
  });
  // State to hold user rows
  // const [rows, setRows] = useState<UserRow[]>([
  //   { firstName: "", lastName: "", email: "", errors: {} },
  // ]);

  // Handle input changes
  // const handleInputChange = (
  //   index: number,
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   const newRows = [...rows];
  //   newRows[index][event.target.name as keyof UserRow] = event.target.value;
  //   setRows(newRows);
  // };

  // Add a new row
  const addRow = () => {
    prepend({
      firstName: "",
      lastName: "",
      email: "",
    });
    // setRows([...rows, { firstName: "", lastName: "", email: "", errors: {} }]);
  };

  // Delete a specific row
  const deleteRow = (index: number) => {
    remove(index);
    // const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
    // setRows(newRows);
  };

  // Validate form data
  // const validateRows = () => {
  //   const newRows = rows.map((row) => {
  //     const errors: { firstName?: string; lastName?: string; email?: string } =
  //       {};
  //     if (!row.firstName) errors.firstName = "First name is required.";
  //     if (!row.lastName) errors.lastName = "Last name is required.";
  //     if (!row.email) errors.email = "Email is required.";
  //     return { ...row, errors };
  //   });
  //   setRows(newRows);
  //   return newRows.every((row) => Object.keys(row.errors || {}).length === 0);
  // };

  // Handle form submission
  const handleSubmitData = (values: any) => {
    console.log("values: ", values);
    // if (validateRows()) {
    //   console.log("Submitted Data:", rows);
    // }
  };

  return (
    <div className="container h-full min-h-screen bg-gray-900">
      <header className="flex justify-between py-5">
        <span className="text-2xl text-white">Add User</span>
        <button
          onClick={addRow}
          className="mb-4 rounded bg-blue-500 px-4 py-2 text-sm text-white transition duration-200 hover:bg-blue-600"
        >
          Add Row
        </button>
      </header>
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        className="rounded-lg bg-gray-800 p-6 shadow-lg"
      >
        <table className="min-w-full border-collapse rounded-lg bg-gray-900 shadow-md">
          <thead>
            <tr className="bg-gray-700">
              <th className="border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-200">
                First Name
              </th>
              <th className="border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-200">
                Last Name
              </th>
              <th className="border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-200">
                Email
              </th>
              <th className="border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-200">
                {/* Actions */}
              </th>
            </tr>
          </thead>
          <tbody>
            {fields.map((row, index) => (
              <tr
                key={index}
                className="transition duration-200 hover:bg-gray-700"
              >
                <td className="border border-gray-600 px-4 py-2">
                  <input
                    {...register(`users.${index}.firstName`)}
                    type="text"
                    // name="firstName"
                    // value={row.firstName}
                    // onChange={(event) => handleInputChange(index, event)}
                    className="rounded border border-gray-500 bg-gray-800 p-1 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="First Name"
                  />
                  {(formState?.isSubmitted ||
                    formState?.touchedFields?.users?.[index]?.firstName) &&
                    formState?.errors?.users?.[index]?.firstName?.message && (
                      <span className="mt-1 block text-sm text-red-500">
                        {formState?.errors?.users?.[index]?.firstName?.message}
                      </span>
                    )}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  <input
                    {...register(`users.${index}.lastName`)}
                    type="text"
                    // name="lastName"
                    // value={row.lastName}
                    // onChange={(event) => handleInputChange(index, event)}
                    className="rounded border border-gray-500 bg-gray-800 p-1 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Last Name"
                  />
                  {/* {row.errors?.lastName && (
                    <span className="mt-1 block text-sm text-red-500">
                      {row.errors.lastName}
                    </span>
                  )} */}
                  {(formState?.isSubmitted ||
                    formState?.touchedFields?.users?.[index]?.lastName) &&
                    formState?.errors?.users?.[index]?.lastName?.message && (
                      <span className="mt-1 block text-sm text-red-500">
                        {formState?.errors?.users?.[index]?.lastName?.message}
                      </span>
                    )}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  <input
                    {...register(`users.${index}.email`)}
                    type="email"
                    // name="email"
                    // value={row.email}
                    // onChange={(event) => handleInputChange(index, event)}
                    className="rounded border border-gray-500 bg-gray-800 p-1 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email"
                  />
                  {/* {row.errors?.email && (
                    <span className="mt-1 block text-sm text-red-500">
                      {row.errors.email}
                    </span>
                  )} */}
                  {(formState?.isSubmitted ||
                    formState?.touchedFields?.users?.[index]?.email) &&
                    formState?.errors?.users?.[index]?.email?.message && (
                      <span className="mt-1 block text-sm text-red-500">
                        {formState?.errors?.users?.[index]?.email?.message}
                      </span>
                    )}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  <button
                    onClick={() => {
                      deleteRow(index);
                    }}
                    className="rounded bg-red-500 px-4 py-1 text-sm text-white transition duration-200 hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <button
            // onClick={handleSubmit}
            type="submit"
            className="rounded bg-green-500 px-4 py-2 text-sm text-white transition duration-200 hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUsersTable;
