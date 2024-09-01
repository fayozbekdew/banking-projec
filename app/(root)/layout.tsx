import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "@/node_modules/next/image";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser()
  
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex flex-col size-full">
          <div className="root-layout">
            <Image
            src='/icons/logo.svg'
            width={30}
            height={30}
            alt='site logo'
            />
          <div className="">
              <MobileNavbar user={loggedIn}/>
            </div>
          </div>
        {children}
        </div>
    </main>
  );
}