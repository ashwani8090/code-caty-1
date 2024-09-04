import React, { useContext } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@molecules/card";
import { Avatar, AvatarImage } from "@/components/atoms/avatar";
import { AuthContext } from "@/contexts/AuthProvider";
const Portfolio = () => {
  const { user } = useContext(AuthContext);
  console.log("user: ", user);

  const data = {
    first_name: "John",
    last_name: "Doe",
    mother_name: "Jane Doe",
    father_name: "Richard Doe",
    email: "john.doe@example.com",
    phone_number: "+1234567890",
    line: "123 Main St",
    city: "Springfield",
    country: "USA",
    image: "https://via.placeholder.com/150", // Dummy image URL
  };

  return (
    <div className="max-h-screen w-full overflow-auto p-8">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-blue-900">
        Portfolio
      </h1>
      <div className="mb-8 flex justify-center">
        <Avatar className="h-40 w-40">
          <AvatarImage src={user?.image} width={100} />
        </Avatar>
      </div>
      <div className="space-y-6">
        {Object.entries(data).map(([label, value], index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-500">
                {label
                  .replace("_", " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-gray-900">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
