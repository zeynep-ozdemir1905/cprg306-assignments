import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from to-blue-400 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 decoration-light bg-light mx-auto w-fit px-4 py-2">
        Add New Item
      </h1>
      <div className="flex justify-center">
       
      </div>
      <NewItem />
    </main>
  );
}
