import { useState } from "react";

const SimpleForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-red-400 p-4 my-10">
        <input type="text" name="name" id="" />
        {/* <br /> */}
        {/* <br /> */}
        <input onChange={handleChangeEmail} type="email" name="email" id="" />
        <br />
        <br />
        <input
          onChange={handleChangePassword}
          type="password"
          name="password"
          id=""
        />
        <br />
        <input className="btn my-5" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
