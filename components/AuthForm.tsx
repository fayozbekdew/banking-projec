"use client";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import CustomInput from "./CustomInput";
import { useRouter } from "@/node_modules/next/navigation";
import { getLoggedInUser, SignIn, SignUp } from "@/lib/actions/user.action";
 function AuthForm({ type }: { type: string }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  console.log(user);
  console.log("render");
  const [isLoading, setIsLoading] = useState(false);
  const loggedInUser = getLoggedInUser();
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        console.log(values);
        const newUser = await SignUp(
          { email: values.email, password: values.password, name:`${values.firstName} ${values.lastName}` }
        );
        setUser(newUser);
      }
      if (type === "sign-in") {
        const response = await SignIn({
          email: values.email,
          password: values.password,
        });
        if (response) {
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
          <Image src="/icons/logo.svg" width={34} height={34} alt="site logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            {" "}
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-up" ? "Sign Up" : "Sign In"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* plaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      label="First Name"
                      control={form.control}
                      type="text"
                      name="firstName"
                      placeholder="Enter your First Name"
                    />
                    <CustomInput
                      label="Last Name"
                      control={form.control}
                      type="text"
                      name="lastName"
                      placeholder="Enter your Last Name"
                    />
                  </div>
                  <CustomInput
                    label="Address"
                    control={form.control}
                    type="text"
                    name="address"
                    placeholder="Enter your specific Address"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      label="State"
                      control={form.control}
                      type="text"
                      name="state"
                      placeholder="Example: NY"
                    />
                    <CustomInput
                      label="Postal Code"
                      control={form.control}
                      type="number"
                      name="postalCode"
                      placeholder="Example: 12345"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      label="Date Of Birth"
                      control={form.control}
                      type="date"
                      name="dateOfBirth"
                      placeholder="Example: 01/01/2000"
                    />
                    <CustomInput
                      label="SSN"
                      control={form.control}
                      type="text"
                      name="ssn"
                      placeholder="Example: 123-45-6789"
                    />
                  </div>
                </>
              )}
              <CustomInput
                label="Email"
                control={form.control}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <CustomInput
                label="Password"
                control={form.control}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button disabled={isLoading} className="form-btn" type="submit">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-up" ? (
                    "Sign Up"
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have you account?"
                : "Already have an account"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
}

export default AuthForm;