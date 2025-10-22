import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-500 p-6">
  <div className="flex flex-col items-start w-full max-w-md p-4">
    <h1 className="text-2xl text-white font-bold mb-4">Week 5- New Item</h1>
    <NewItem />
  </div>
</main>
  );
}
