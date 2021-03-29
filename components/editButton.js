import Link from "next/link";

export default function EditButtons() {
  const styles =
    "w-full py-2 font-medium text-center text-white bg-black rounded-md shadow w-25";

  return (
    <div className="flex items-center space-x-3">
      <Link className={styles} to="/settings">
        <a>Edit Profile</a>
      </Link>
      <Link className={styles} to="/new">
        <a>Add New Link</a>
      </Link>
    </div>
  );
}
