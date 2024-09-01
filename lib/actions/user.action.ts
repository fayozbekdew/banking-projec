'use server'
import { createAdminClient, createSessionClient } from "../appwrite"
import { ID } from "node-appwrite";
import { cookies } from "@/node_modules/next/headers";
import { parseStringify } from "../utils";

export const SignIn = async ({ email,password}:{email:string,password:string}) => {
  try{
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email,password)
    cookies().set("appwrite-session", response.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(response)
  }catch(error){
    console.log('Error')
  }
}
export const SignUp = async ({ email,password,name}:{email:string,password:string,name:string}) => {
  try{
    const { account } = await createAdminClient();
    const newUserAccount   = await account.create(
      ID.unique(),
      email, 
      password, 
      name
      );
      const session = await account.createEmailPasswordSession(email, password);
      cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });
      return parseStringify(newUserAccount);
    }
    catch(error){
      console.error('Error', error);
    }
  }

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete('appwrite-session');

    await account.deleteSession('current');
  } catch (error) {
    return null;
  }
}
