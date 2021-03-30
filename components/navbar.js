import auth from "../services/auth";
import { useRouter } from "next/router";

const Logout = (router) => {
  auth.logout();
  router.reload();
};

export default function Navbar({ name, history }) {
  const router = useRouter();
  return (
    <nav className="sticky top-0 flex items-center justify-between w-full px-2 py-4 bg-gray-700">
      <p className="text-lg font-medium text-white"> Welcome back, {name}</p>
      <div
        onClick={() => Logout(router)}
        className="px-3 py-1 font-normal text-white bg-red-500 rounded-full"
      >
        Logout
      </div>
    </nav>
  );
}
