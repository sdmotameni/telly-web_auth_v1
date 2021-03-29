import auth from "../services/auth";

export default function Navbar({ name }) {
  return (
    <nav className="sticky top-0 flex items-center justify-between w-full px-2 py-4 bg-gray-700">
      <p className="text-lg font-medium text-white"> Welcome back, {name}</p>
      <div
        onClick={() => auth.logout()}
        className="px-3 py-1 font-normal text-white bg-red-500 rounded-full"
      >
        Logout
      </div>
    </nav>
  );
}
