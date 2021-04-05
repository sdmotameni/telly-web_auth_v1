// import Image from "next/image";

export default function ProfileHeader({ profileId, photoUrl, name, bio }) {
  return (
    <div className="flex px-2 py-3 bg-white border border-gray-300 rounded-md shadow-lg">
      <img
        className="object-cover h-32 rounded-full shadow-lg"
        src={`https://api.gettelly.com/profile/${profileId}/image`}
        alt=""
      />
      {/* <Image
        src={`https://api.gettelly.com/profile/${profileId}/image`}
        width={125}
        height={150}
        alt="profile picture"
      /> */}
      <div className="flex flex-col items-center justify-center w-full space-y-3">
        <div className="">
          <h1 className="text-xl font-bold tracking-tight text-center">
            {name}
          </h1>
          <h2 className="font-light tracking-tight text-center text-gray-500">
            {bio}
          </h2>
        </div>
        <div className="flex items-center justify-center px-4 py-2 tracking-tight text-white bg-blue-600 outline-none rounded-3xl">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 139 139">
            <path d="M67.317,81.952c-9.284-7.634-15.483-17.054-18.742-22.414l-2.431-4.583c0.85-0.912,7.332-7.853,10.141-11.619  c3.53-4.729-1.588-9-1.588-9S40.296,19.933,37.014,17.076c-3.282-2.861-7.06-1.272-7.06-1.272  c-6.898,4.457-14.049,8.332-14.478,26.968C15.46,60.22,28.705,78.216,43.028,92.148c14.346,15.734,34.043,31.504,53.086,31.486  c18.634-0.425,22.508-7.575,26.965-14.473c0,0,1.59-3.775-1.268-7.06c-2.86-3.284-17.265-17.688-17.265-17.688  s-4.268-5.119-8.998-1.586c-3.525,2.635-9.855,8.496-11.38,9.917C84.171,92.749,73.582,87.104,67.317,81.952z" />
          </svg>
          <a href="/contact.vcf" className="ml-2">
            Add to Contacts
          </a>
        </div>
      </div>
    </div>
  );
}
