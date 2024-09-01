import AuthForm from "@/components/AuthForm";
import React from "react";

function SignInPage() {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={"sign-in-page"} />
    </section>
  );
}

export default SignInPage;
