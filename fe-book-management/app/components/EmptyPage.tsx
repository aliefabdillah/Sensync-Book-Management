import Image from "next/image";
import React from "react";

export default function EmptyPage({ item }: { item: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image src={"/no-results.png"} alt="No Results" width={250} height={250} unoptimized/>
      <p className="text-center font-poppins text-2xl font-semibold">{item} Not Found!</p>
    </div>
  );
}
