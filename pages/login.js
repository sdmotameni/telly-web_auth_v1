import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import auth from "../services/auth";
import Form from "../components/form";
import Footer from "../components/footer";

export default class Home extends Form {
  state = { data: "", errorMsg: null };

  async doSubmit() {
    const { email, password } = this.state.data;
    try {
      const { headers } = await auth.login(email && email.trim(), password);
      auth.storeToken(headers["x-auth-token"]);
      window.location = "/me";
    } catch ({ errorMsg, _ }) {
      this.setState({ errorMsg });
    }
  }

  render() {
    const { errorMsg } = this.state;

    const inputStyles =
      "focus:outline-none outline-none focus:ring mb-2 focus:ring-blue-600 border border-gray-200 px-6 py-3 rounded-md w-full";
    const buttonStyles =
      "flex items-center w-full justify-center px-4 py-2 mt-3 font-semibold text-white bg-blue-500 rounded-full outline-none";

    return (
      <div>
        <Head>
          <title>Login - Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center w-full h-screen p-4 bg-gray-100">
          <Image src="/logo.png" alt="me" width={200} height={200} />
          <h1 className="my-3 text-4xl font-extrabold tracking-tight">
            Login to <span className="text-blue-600">Telly</span>
          </h1>
          {errorMsg && (
            <h2 className="px-3 py-4 my-3 text-center text-red-800 bg-red-200 rounded-lg shadow-inner">
              {errorMsg}
            </h2>
          )}
          <form
            className="flex flex-col items-center w-full"
            onSubmit={this.handleSubmit}
          >
            {this.renderInput(
              inputStyles,
              "text",
              "email",
              "Email Address",
              this.handleChange
            )}
            {this.renderInput(
              inputStyles,
              "password",
              "password",
              "Password",
              this.handleChange
            )}
            {this.renderButton(buttonStyles, "Login")}
          </form>
          <Link href="/forgot">
            <a className="mt-4 text-blue-500">Forgot Password?</a>
          </Link>
          <Footer styles="mt-3" />
        </main>
      </div>
    );
  }
}
