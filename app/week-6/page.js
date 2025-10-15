import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-blue-200 p-6">
      <h1 className="text-3xl font-bold text-center text-black-700 mb-6  decoration-light">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
