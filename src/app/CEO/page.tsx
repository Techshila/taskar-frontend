import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const CEO = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/CEO");
  }

  return (
    <div>
      <h1>CEO Session</h1>
      <p>{session?.user?.email}</p>
     
    </div>
  );
};

export default CEO;