import Input from "../atoms/input";

const EmailBox = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <Input label=" Email" type="email" {...props} />;
};

export default EmailBox;
