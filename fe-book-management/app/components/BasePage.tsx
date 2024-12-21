export default function BasePage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col w-2/3 items-center py-6">
        <p className="text-4xl text-center font-lexend_deca font-extrabold mt-4">
          📚 Book Management System
        </p>
        <div className="w-full mt-12 flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
