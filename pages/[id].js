// import { useRouter } from "next/router";
// import Welcome from "../components/welcome";
// import Profile from "../components/profile";
// import ProfileService from "../services/profileService";

// const { useState } = "react";

// export default function id() {
//   const [profile, setProfile] = useState("null");

//   const router = useRouter();
//   const { id } = router.query;

//   setProfile("hello");
//   console.log(profile);

//   // ProfileService.getProfile(id)
//   //   .then(({ data }) => {
//   //     setProfile(data);
//   //   })
//   //   .catch((err) => {
//   //     setProfile(false);
//   //   });

//   return <div>hello</div>;
//   // return 1 ? <Profile name="Love It d" isAdmin={true} /> : <Welcome />;
// }

// import { useState, useEffect } from "react";

// function id() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return <div>not mounted</div>;
//   }

//   return <div>hello</div>;
// }

// export default id;

import { useState, useEffect } from "react";
import Loading from "../components/loading";
import Profile from "../components/profile";
import Welcome from "../components/welcome";

export default function id() {
  useEffect(() => {
    console.log("Good");
  }, []);

  return <Loading />;
}
