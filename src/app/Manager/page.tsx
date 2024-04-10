import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Manager = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Manager");
  }

  return (
    <div>
      <h1>Manager Session</h1>
      <p>{session?.user?.email}</p>
     
    </div>
  );
};

export default Manager;