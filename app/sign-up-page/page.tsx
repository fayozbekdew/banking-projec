import AuthForm from "@/components/AuthForm";
import React from "react";

function SignUpPage() {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={"sign-up-page"} />
    </section>
  );
}

export default SignUpPage;
