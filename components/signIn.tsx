"use client";

// import { login } from "@/actions/auth";
import { Button } from "./ui/button";

const SignInAction = () => {
  return (
    <div>
      <Button
        // onClick={() => login("github")}
        className="bg-blue-600 text-white h-12 px-6 text-base font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Get Started
      </Button>
    </div>
  );
};

export default SignInAction;
