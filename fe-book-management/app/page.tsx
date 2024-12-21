import ListCard from "./components/ListCard";

export default function Home() {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col  bg-pink-200 w-2/3 items-center py-6">
        <p className="text-4xl text-center font-lexend_deca font-extrabold mt-4">
          📚 Book Management System
        </p>
        <div className="bg-green-400 w-full mt-8">
          <ListCard />
        </div>
      </div>
    </div>
  );
}
