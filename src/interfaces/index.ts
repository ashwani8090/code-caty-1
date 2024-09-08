// types.ts
export interface BasicDetails {
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  nationality: string;
  marital_status?: string;
  occupation: string;
  company: string;
}

export interface ContactDetails {
  email: string;
  phone_number: string;
  line: string;
  city: string;
  country: string;
}

export interface Skills {
  skills: string;
  languages: string;
  hobbies: string;
  summary: string;
}

export interface PortfolioState {
  basicDetails: BasicDetails;
  contactDetails: ContactDetails;
  skills: Skills;
}

export const initialState: PortfolioState = {
  basicDetails: {
    first_name: "John",
    last_name: "Doe",
    birth_date: "January 1, 1990",
    gender: "Male",
    nationality: "American",
    marital_status: "Single",
    occupation: "Software Engineer",
    company: "Tech Corp",
  },
  contactDetails: {
    email: "john.doe@example.com",
    phone_number: "+1234567890",
    line: "123 Main St",
    city: "Springfield",
    country: "USA",
  },
  skills: {
    skills: "JavaScript, React, Node.js, CSS, HTML",
    languages: "English, Spanish",
    hobbies: "Coding, Reading, Traveling",
    summary:
      "Passionate software engineer with experience in web development and a knack for solving complex problems.",
  },
};
