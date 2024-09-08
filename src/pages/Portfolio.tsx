import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Avatar, AvatarImage } from "@/components/atoms/avatar";
import { AuthContext } from "@/contexts/AuthProvider";
import { usePortfolio } from "@/hooks/usePotfolio";

const Portfolio = () => {
  const { user } = useContext(AuthContext);

  const data = usePortfolio();

  const [image, setImage] = useState(user?.image);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="max-h-screen w-full overflow-auto bg-gray-900 p-8">
      <Link to={"/portfolio/basic"}>
        <h1 className="mb-8 text-center text-5xl font-bold text-white">
          My Portfolio
        </h1>
      </Link>

      <div className="mx-auto max-w-3xl space-y-8 rounded-lg bg-gray-800 p-8 text-left shadow-xl">
        <section className="flex justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {data.first_name} {data.last_name}
            </h2>
            <p className="text-lg text-gray-400">
              <strong className="text-gray-200">{data.occupation}</strong> at{" "}
              <span className="text-indigo-400">{data.company}</span>
            </p>
            <p className="text-md text-gray-400">
              📧 {data.email} | 📞 {data.phone_number}
            </p>
            <p className="text-md text-gray-400">
              📍 {data.line}, {data.city}, {data.country}
            </p>
            <p className="text-md text-gray-400">
              🎂 Birthdate: {data.birth_date}
            </p>
            <p className="text-md text-gray-400">👤 Gender: {data.gender}</p>
            <p className="text-md text-gray-400">
              🌍 Nationality: {data.nationality}
            </p>
            <p className="text-md text-gray-400">
              💍 Marital Status: {data.marital_status}
            </p>
          </div>
          <div className="mb-8 flex justify-center">
            {/* Hidden file input */}
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />

            {/* Label triggers file input when avatar is clicked */}
            <label htmlFor="imageUpload" className="cursor-pointer">
              <Avatar className="h-40 w-40 rounded-full border-4 border-gray-600 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                <AvatarImage src={image} width={100} />
              </Avatar>
            </label>
          </div>
        </section>

        <hr className="my-6 border-t border-gray-700" />

        {/* Summary Section */}
        <section>
          <h3 className="mb-2 text-2xl font-semibold text-white">
            Professional Summary
          </h3>
          <p className="text-md text-gray-400">
            {<div dangerouslySetInnerHTML={{ __html: data?.summary }} />}
          </p>
        </section>

        <hr className="my-6 border-t border-gray-700" />

        <section>
          <h3 className="mb-2 text-2xl font-semibold text-white">Skills</h3>
          <ul className="text-md grid list-inside list-disc grid-cols-2 gap-4 text-gray-400">
            {data.skills.map((skill: string, index: number) => (
              <li key={index} className="flex items-center">
                <span>💡 {skill}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="my-6 border-t border-gray-700" />

        <section>
          <h3 className="mb-2 text-2xl font-semibold text-white">Languages</h3>
          <ul className="text-md list-inside list-disc text-gray-400">
            {data.languages.map((language: string, index: number) => (
              <li key={index}>🌐 {language}</li>
            ))}
          </ul>
        </section>

        <hr className="my-6 border-t border-gray-700" />

        <section>
          <h3 className="mb-2 text-2xl font-semibold text-white">Hobbies</h3>
          <ul className="text-md list-inside list-disc text-gray-400">
            {data.hobbies.map((hobby: string, index: number) => (
              <li key={index}>🎯 {hobby}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
