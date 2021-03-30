import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProfileService from "../services/profileService";
import Profile from "../components/profile";
import Loading from "../components/loading";
import Welcome from "../components/welcome";

export default function id() {
  const [data, setData] = useState(null);
  const [isDone, setIsDone] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    ProfileService.getProfile(id)
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setIsDone(true);
      });
  }, [isDone]);

  if (!isDone) return <Loading />;

  return data ? <Profile /> : <Welcome />;
}
