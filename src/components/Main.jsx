import React from "react";

const Main = () => {
  return (
    <div className="w-full h-96 border border-gray-100 relative">
      <img
        src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1658682898~exp=1658683498~hmac=228b5bd887e1e0f59cc4e9db01521f72997b07d4810b08a22d99c1d0efaeb57d&w=740"
        alt="banner"
        className="h-full w-full object-cover bg-no-repeat bg-bottom"
      />
      <div className="absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-40 w-[400px]">
        <h2 className="text-3xl font-bold mb-2"> Welcome to SYNT-X</h2>
        <h3 className="text-xl">Check out our templates</h3>
        <p className="text-gray-700">All freemium for personal use.</p>
      </div>
    </div>
  );
};

export default Main;
