import Link from "next/link";

export default function RootPage() {
  return (
    <main className="p-4 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-300 to-yellow-200 space-y-8">
      <h1 className="text-3xl font-bold text-center text-white mb-6 w-fit px-4 py-2">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <div className="flex flex-col space-y-4  max-w-xs">
        <Link href="/week-2" className="p-3 border rounded-md shadow-sm bg-purple-300 text-white hover:bg-purple-600 transition">
          Go to Week 2 ↓
        </Link>
        <Link href="/week-3" className="p-3 rounded-md shadow-sm bg-pink-300 text-white hover:bg-pink-600 transition">
          Go to Week 3 ↓
        </Link>
        <Link href="/week-4" className="p-3  rounded-md shadow-sm bg-green-200 text-white hover:bg-green-300 transition">
          Go to Week 4 ↓
        </Link>
        <Link href="/week-5" className="p-3  rounded-md shadow-sm bg-purple-300 text-white hover:bg-purple-500 transition">
          Go to Week 5 ↓
        </Link>
        <Link href="/week-6" className="p-3 rounded-md shadow-sm bg-blue-300 text-white hover:bg-blue-600 transition">
          Go to Week 6 ↓
        </Link>
        <Link href="/week-7" className="p-3  rounded-md shadow-sm bg-orange-300 text-white hover:bg-orange-500 transition">
          Go to Week 7 ↓
        </Link>
        <Link href="/week-8" className="p-3 rounded-md shadow-sm bg-amber-200 text-gray-900 hover:bg-yellow-500 transition">
          Go to Week 8 ↓
        </Link>
        <Link href="/week-9" className="p-3 rounded-md shadow-sm bg-red-300 text-white hover:bg-red-600 transition">
          Go to Week 9 ↓
        </Link>
        <Link href="/week-10" className="p-3 rounded-md shadow-sm bg-blue-300 text-white hover:bg-teal-600 transition">
          Go to Week 10 ↓
        </Link>
      </div>
    </main>
  );
}
