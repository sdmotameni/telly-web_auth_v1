import Head from "next/head";
import { useRouter } from "next/router";

export default function Forgot() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Forgot Password - Telly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen px-4 bg-gray-100">
        <div className="pt-10 text-3xl text-center">
          Forgot password? Email{" "}
          <span className="text-red-700">help@gettelly.com</span>
        </div>
        <div
          className="px-4 py-3 mt-5 text-xl text-center text-white bg-blue-500 rounded-md"
          onClick={() => router.back()}
        >
          Go back
        </div>
      </main>
    </div>
  );
}
