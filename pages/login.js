import Head from "next/head";
import Image from "next/image";
import Form from "../components/form";

export default class Home extends Form {
  state = { data: " ", errorMsg: null };

  doSubmit() {
    console.log(this.state.data);
  }

  render() {
    const { errorMsg } = this.state;
    return (
      <div>
        <Head>
          <title>Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center w-full h-screen p-4 bg-gray-100">
          <Image
            src="/logo.png"
            alt="me"
            width={250}
            height={250}
            // styles="w-48 h-48 border border-red-500"
          />

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
              "focus:outline-none outline-none focus:ring mb-2 focus:ring-blue-600 border border-gray-200 px-6 py-3 rounded-md w-full",
              "text",
              "email",
              "Email Address",
              this.handleChange
            )}
            {this.renderInput(
              "focus:outline-none outline-none focus:ring focus:ring-blue-600 border border-gray-200 px-6 py-3 rounded-md w-full",
              "password",
              "password",
              "Password",
              this.handleChange
            )}
            {this.renderButton(
              "flex items-center w-full justify-center px-4 py-2 mt-3 font-semibold text-white bg-blue-500 rounded-full outline-none",
              "Login"
            )}
          </form>
        </main>
        <div></div>

        <footer></footer>
      </div>
    );
  }
}
