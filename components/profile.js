import Head from "next/head";
import ProfileHeader from "./profileHeader";
import LinkButton from "./linkButton";
import Navbar from "./navbar";
import EditButtons from "./editButtons";
import Footer from "./footer";

function Profile({ data }) {
  return (
    <div>
      <Head>
        <title>{data.name} - Telly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen bg-gray-100">
        {false && <Navbar name={data.name.substr(0, data.name.indexOf(" "))} />}
        <div className="p-4 mx-auto">
          <ProfileHeader name={data.name} bio="High Point University" />
          {false && (
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
    </div>
  );
}

export default Profile;
