import { Outlet, Navigate } from "react-router-dom";
import sideimg from "../../assets/images/sideimg.svg"

console.log(sideimg);

const AuthLayout = () => {
  const isAuthenticade = false;
  return (
    <>
      {isAuthenticade ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img src={sideimg} alt="logo" className="hidden h-screen w-1/2"/>
        </>
      )}
    </>
  );
};

export default AuthLayout;