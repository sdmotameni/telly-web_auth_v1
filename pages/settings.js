import Head from "next/head";
import Form from "../components/form";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import UserService from "../services/userService";

export default class Settings extends Form {
  state = { data: "", errorMsg: null, isAdmin: true };

  async componentDidMount() {
    try {
      await UserService.getMe();
    } catch {
      window.location = "/login";
    }
  }

  async doSubmit() {
    const { data } = this.state;
    try {
      await UserService.updateProfile(data);
      console.log("success");
    } catch (errorMsg) {
      console.error(errorMsg);
    }
  }

  render() {
    const { errorMsg, isAdmin } = this.state;
    const inputStyles =
      "focus:outline-none outline-none focus:ring-2 mb-1 focus:ring-blue-600 border border-gray-200 px-6 py-2 rounded-md w-full";
    const buttonStyles =
      "flex items-center w-full justify-center px-4 py-2 mt-3 font-semibold text-white bg-green-500 rounded-full outline-none";

    return (
      <div>
        <Head>
          <title>Settings- Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full h-screen bg-gray-100">
          {isAdmin && <Navbar name="Jacob" />}
          <div className="px-4 py-2">
            <h1 className="mb-1 text-2xl font-semibold text-center">
              Settings
            </h1>
            {errorMsg && (
              <h2 className="px-3 py-4 my-3 text-center text-red-800 bg-red-200 rounded-lg shadow-inner">
                {errorMsg}
              </h2>
            )}
            <form onSubmit={this.handleSubmit}>
              <label className="font-semibold">Email</label>
              {this.renderInput(
                inputStyles,
                "text",
                "email",
                "john@example.com",
                this.handleChange
              )}
              <label className="font-semibold">Phone</label>
              {this.renderInput(
                inputStyles,
                "tel",
                "phone",
                "123-456-7890",
                this.handleChange
              )}
              <label className="font-semibold">Full Name</label>
              {this.renderInput(
                inputStyles,
                "text",
                "name",
                "John Doe",
                this.handleChange
              )}
              <label className="font-semibold">Bio</label>
              {this.renderInput(
                inputStyles,
                "text",
                "bio",
                "loremloremloremloremloremloremlorem",
                this.handleChange
              )}
              <label className="font-semibold">Password</label>
              {this.renderInput(
                inputStyles,
                "password",
                "password",
                "***********",
                this.handleChange
              )}
              {this.renderButton(buttonStyles, "Save Settings")}
            </form>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}
