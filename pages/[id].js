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

import { Component } from "react";
import ProfileService from "../services/profileService";
import Profile from "../components/profile";
import Loading from "../components/loading";
import Welcome from "../components/welcome";

export default class id extends Component {
  state = { data: null };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: "hello" });
    }, 3000);
  }

  loadData() {
    this.setState({ data });
  }

  render() {
    if (!this.state.data) {
      return <Loading />;
    }

    return <Profile />;
  }
}

// export default function id() {
//   const [isNew, setIsNew] = useState(false);

//   useEffect(() => {
//     console.log("hello");
//     setIsNew(true);
//   });

//   setTimeout(() => {
//     setIsNew(false);
//   }, 3000);

//   if (!isNew) {
//     return <div>not mounted</div>;
//   }

//   return <div>hello</div>;
// }

// const [profile, setProfile] = useState(null);
// const loadData = () => {
//   ProfileService.getProfile()
//     .then(({ data }) => {
//       console.log("data", data);
//       setProfile(data);
//     })
//     .catch((errMsg) => {
//       console.log(errMsg);
//       setProfile(null);
//     });
// };
// setTimeout(() => {
//   loadData();
// }, 3000);
// return !profile ? <Loading /> : <Profile />;
