import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
     <div >
    This is CodesWear Website
     </div>
     <div   className="mx-2" >
   This is CodesWear Website
    </div><div   className="mx-4 bg-green-700" >
   This is CodesWear Website
    </div>
    </>
  );
}
