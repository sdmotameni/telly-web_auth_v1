import { useRouter } from "next/router";
import ProfileService from "../services/profileService";
import Profile from "../components/profile";

export default async function id() {
  const router = useRouter();
  const { id } = router.query;
  //   try {
  //     console.log("try");
  //     await ProfileService.getProfile("393030");
  //   } catch (err) {
  //     console.log("errorrrrr");
  //   }
  return <Profile name="Love It" isAdmin={true} />;
}
