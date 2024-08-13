const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
  };
  return (
    <div>
      <form className="bg-red-400 p-4" onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input className="btn my-5" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
