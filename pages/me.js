import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Profile from "../components/profile";
import Loading from "../components/loading";
import UserService from "../services/userService";

export default function Me() {
  const [component, setComponent] = useState(<Loading />);
  const router = useRouter();

  useEffect(() => {
    UserService.getMe()
      .then(({ data }) => {
        setComponent(<Profile data={data} isAdmin={true} />);
      })
      .catch(() => {
        router.push("/login");
      });
  }, []);

  return component;
}
