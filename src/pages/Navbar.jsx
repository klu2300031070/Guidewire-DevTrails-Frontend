import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 w-full flex justify-center z-50">
      <div className="w-[90%] max-w-6xl bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex justify-between items-center">
        {/* <img src="./Paysheildlogo.png" alt="logo" className="logo" /> */}
        <h1 className="font-bold text-lg text-gray-800">PayShield</h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <span className="hover:text-black cursor-pointer">Why Us</span>
          <span className="hover:text-black cursor-pointer">Solutions</span>
          <span className="hover:text-black cursor-pointer">Insights</span>
        </div>

        <button
          onClick={() => navigate("/onboarding")}
          className="bg-green-400 hover:bg-green-500 text-black px-5 py-2 rounded-full font-medium"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}