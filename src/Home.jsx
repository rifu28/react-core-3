import SimpleForm from "./SimpleForm";

const Home = () => {
  return (
    <div>
      <h2 className="bg-orange-400 w-1/2 mx-auto p-5 my-5 text-center text-white font-semibold text-2xl">
        This is home
      </h2>
      <div className="flex justify-center items-center gap-10 px-5">
        <p className="w-2/3 border-2 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          temporibus odio reprehenderit, a, nemo possimus provident voluptatum
          suscipit error deleniti ipsum assumenda aperiam officia esse
          distinctio earum ullam. Dolores consectetur corporis velit illum
          facilis nulla placeat necessitatibus porro, voluptates nam aliquam
          eligendi, provident ipsum ullam reiciendis iure quibusdam aspernatur.
          Excepturi!
        </p>

        {/* <p className="w-2/3 border-2 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          temporibus odio reprehenderit, a, nemo possimus provident voluptatum
          suscipit error deleniti ipsum assumenda aperiam officia esse
          distinctio earum ullam. Dolores consectetur corporis velit illum
          facilis nulla placeat necessitatibus porro, voluptates nam aliquam
          eligendi, provident ipsum ullam reiciendis iure quibusdam aspernatur.
          Excepturi!
        </p> */}
      </div>
      <SimpleForm></SimpleForm>
    </div>
  );
};

export default Home;
