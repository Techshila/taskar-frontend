import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Member = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/User");
  }

  return (
    <div>
      <h1>User Session</h1>
      <p>{session?.user?.email}</p>
     
    </div>
  );
};

export default Member;