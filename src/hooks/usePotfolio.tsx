import { useSelector } from "react-redux";

export const usePortfolio = () => {
  const {
    basicDetails,
    contactDetails,
    skills: skillsDetails,
  } = useSelector((state: any) => state.portfolio);

  return {
    ...basicDetails,
    ...contactDetails,
    ...{
      ...skillsDetails,
      skills: skillsDetails.skills.split(","),
      languages: skillsDetails.languages.split(","),
      hobbies: skillsDetails.hobbies.split(","),
    },
  };
};
