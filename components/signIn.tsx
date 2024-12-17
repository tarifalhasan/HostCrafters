// import { login } from "@/actions/auth";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

const SignInAction = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      {session ? (
        <form
          action={async () => {
            "use server";
            await auth.api.signOut({
              headers: await headers(),
            });
            redirect("/");
          }}
        >
          <Button type="submit">Sign Out</Button>
        </form>
      ) : (
        <Link href="/sign-in">
          <Button
            // onClick={() => login("github")}
            className="bg-blue-600 text-white h-12 px-6 text-base font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
};

export default SignInAction;
