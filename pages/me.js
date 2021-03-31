import Profile from "../components/profile";
import Loading from "../components/loading";
import UserService from "../services/userService";

import { useEffect, useState } from "react";

export default function Me() {
  const [component, setComponent] = useState(<Loading />);

  useEffect(() => {
    UserService.getMe().then(({ data }) => {
      setComponent(<Profile data={data} isAdmin={true} />);
    });
  }, []);

  return component;
}
