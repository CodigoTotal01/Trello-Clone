import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import localFont from "next/font/local"
import Link from "next/link" //Permite movernos entre paginas sin recargar la pagina
import {cn} from "@/lib/utils"

import { Poppins } from "next/font/google";

const headingFont = localFont({ //! Basicamente es un tipo de letra que podremos ubicar con cn
  src: "../../public/fonts/font.woff2"
});


const textFont = Poppins({
  subsets: ["latin"],
  weight: [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
  ],
})

const MarketingPage = () => {
  return (
    // Principal
    <div className="flex items-center justify-center flex-col">
      <div className={cn("flex items-center justify-end flex-col", headingFont.className )}>
        <div
          className="mb-4 flex 
                    items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full upper"
        >
          <Medal className="h-5 w-6 mr-2"></Medal>
          No 1 task managment
        </div>

        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify help team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded pb-4 w-fit">
          Work forwat.
        </div>
      </div>
      
      <div className={cn("text-sm md-text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
        Collaborate, mage project, and reach new productivity peaks. From high
        rises to the home office, the way your team works is unique - accomplish
        it all with Taskify.
      </div>

      <Button className="mt-6" size="lg" asChild>
        <Link href="/sing-up">
          Get Taskify for free
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
