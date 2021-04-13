import VCardButton from "../components/vcardButton";

export default function ProfileHeader({ profileId, photoUrl, name, bio }) {
  return (
    <div className="flex px-2 py-3 bg-white border border-gray-300 rounded-md shadow-lg">
      <img
        className="object-cover h-32 rounded-full shadow-lg"
        src={photoUrl}
        alt=""
      />
      <div className="flex flex-col items-center justify-center w-full space-y-3">
        <div className="">
          <h1 className="text-xl font-bold tracking-tight text-center">
            {name}
          </h1>
          <h2 className="font-light tracking-tight text-center text-gray-500">
            {bio}
          </h2>
        </div>
        <VCardButton profileId={profileId} />
      </div>
    </div>
  );
}
