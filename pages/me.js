import Profile from "../components/profile";
import UserService from "../services/userService";

import { useEffect, useState } from "react";

export default function Me() {
  const [data, setData] = useState("");
  useEffect(() => {
    UserService.getMe().then(({ data }) => {
      setData(data);
      console.log(data);
    });
  }, []);

  return <Profile data={data} isAdmin={true} />;
}
