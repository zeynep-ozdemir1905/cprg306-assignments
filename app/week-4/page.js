import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br to-pink-300 p-6">
  <div className="flex flex-col items-start w-full max-w-md p-4">
    <h1 className="text-2xl text-black font-bold mb-4">Add New Item</h1>
    <NewItem />
  </div>
</main>
  );
}
