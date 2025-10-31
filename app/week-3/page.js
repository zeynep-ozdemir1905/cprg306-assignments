import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center text-black-700 mb-6 decoration-light bg-pink-200/50 mx-auto w-fit px-4 py-2 rounded-full">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
