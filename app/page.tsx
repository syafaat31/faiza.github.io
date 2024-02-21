import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#FFE5E5] h-screen flex items-center justify-center p-8">
      <div>
        <div className="mb-8">
          <div className="flex flex-col items-center gap-4">
            <span
              className={`${playfairDisplay.className} text-[#756ab6] basis-1/2 lg:basis-[30%] text-2xl font-semibold`}
            >
              ABOUT ME
            </span>
            <Image
              priority
              src="/photo.jpeg"
              alt="photo"
              width={200}
              height={200}
              className="w-[120px] h-[120px] rounded-full object-cover"
            />
          </div>
        </div>
        <div className="text-lg font-bold space-y-2">
          <div className="flex">
            <span className="text-[#756ab6] basis-1/2 lg:basis-[30%]">
              Fav game
            </span>
            <span className="text-[#d63484] basis-1/2 lg:basis-[70%]">
              : cacing
            </span>
          </div>
          <div className="flex">
            <span className="text-[#756ab6] basis-1/2 lg:basis-[30%]">
              Status
            </span>
            <span className="text-[#d63484] basis-1/2 lg:basis-[70%]">
              : milik syafaat
            </span>
          </div>
          <div className="flex">
            <span className="text-[#756ab6] basis-1/2 lg:basis-[30%]">
              Emojis
            </span>
            <span className="text-[#d63484] basis-1/2 lg:basis-[70%]">
              : 🖕🏼
            </span>
          </div>
          <div className="flex">
            <span className="text-[#756ab6] basis-1/2 lg:basis-[30%]">
              Umur
            </span>
            <span className="text-[#d63484] basis-1/2 lg:basis-[70%]">
              : 5 taun
            </span>
          </div>
          <div className="flex">
            <span className="text-[#756ab6] basis-1/2 lg:basis-[30%]">
              Fav song
            </span>
            <span className="text-[#d63484] basis-1/2 lg:basis-[70%]">
              : lagu galau
            </span>
          </div>
          <div className="flex">
            <span className="text-[#756ab6] basis-1/2 lg:basis-[30%]">
              Kata kata
            </span>
            <span className="text-[#d63484] basis-1/2 lg:basis-[70%]">
              : kamu mah udah gasayang aku
            </span>
          </div>
          <div className="flex">
            <span className="text-[#756ab6] basis-1/2 lg:basis-[30%]">
              Hobby
            </span>
            <span className="text-[#d63484] basis-1/2 lg:basis-[70%]">
              : nangisin cowo ganteng
            </span>
          </div>
          <div className="flex">
            <span className="text-[#756ab6] basis-1/2 lg:basis-[30%]">
              Fav food
            </span>
            <span className="text-[#d63484] basis-1/2 lg:basis-[70%]">
              : kue pancong terus sampe diabetes
            </span>
          </div>
          <div className="flex">
            <span className="text-[#756ab6] basis-1/2 lg:basis-[30%]">
              Fav drinks
            </span>
            <span className="text-[#d63484] basis-1/2 lg:basis-[70%]">
              : air sehat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
