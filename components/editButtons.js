import Link from "next/link";

export default function EditButtons() {
  const styles =
    "w-full py-2 font-medium text-center text-white bg-gray-700 rounded-md shadow w-25";

  return (
    <div className="flex items-center space-x-3">
      <Link href="/settings">
        <a className={styles}>Edit Profile</a>
      </Link>
      <Link href="/new">
        <a className={styles}>Add New Link</a>
      </Link>
    </div>
  );
}
