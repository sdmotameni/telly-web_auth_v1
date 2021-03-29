import { Component } from "react";
import ProfileHeader from "../components/profileHeader";
import LinkButton from "../components/linkButton";
import Navbar from "../components/navbar";
import EditButtons from "../components/editButtons";
import Footer from "../components/footer";

export default class Profile extends Component {
  state = { links: null, isAdmin: true };

  render() {
    const { isAdmin } = this.state;
    return (
      <main className="w-full h-screen bg-gray-100">
        {isAdmin && <Navbar name="Adam" />}
        <div className="p-4 mx-auto">
          <ProfileHeader name="Sep Motameni" bio="High Point University" />
          {isAdmin && (
            <div className="pt-2">
              <EditButtons />
            </div>
          )}
          <div className="mt-4">
            {LinkButton("instagram", "sepmotameni")}
            {LinkButton("snapchat", "sepmotameni")}
            {LinkButton("tiktok", "sepmotameni")}
            {LinkButton("cashapp", "sdmotameni")}
            {LinkButton("linkedin", "sepmotameni")}
            {LinkButton("venmo", "sdmotameni")}
            {LinkButton("twitter", "sepmotameni")}
            {LinkButton("whatsapp", "13368995612")}
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
