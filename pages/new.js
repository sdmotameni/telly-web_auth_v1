import Head from "next/head";
import Image from "next/image";
import Form from "../components/form";
import Navbar from "../components/navbar";
import UserService from "../services/userService";

export default class New extends Form {
  state = { data: "", errorMsg: null };

  async componentDidMount() {
    try {
      const { data } = await UserService.getMe();
      this.setState({ data });
    } catch {
      window.location = "/login";
    }
  }

  async doSubmit() {}

  render() {
    const { data } = this.state;
    return (
      <>
        <Head>
          <title>{data.name} - Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full h-screen bg-gray-100">
          <Navbar name={data.name} />
          <div className="p-4 mx-auto">
            <div className="mt-4">
              <div className="bg-white rounded-md">
                <Image
                  src="/icons/snapchat.png"
                  alt={platform + " Icon"}
                  height={64}
                  width={64}
                />
                <input type="text" placeholder="Snapchat Username" />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
