import Link from "next/link";

export default function RootPage() {
  return (
   <main className="p-4 min-h-screen flex flex-col items-center justify-center bg-gray-600">
  <h1 className="text-3xl font-bold text-center text-white mb-6 decoration-light w-fit px-4 py-2">
    CPRG 306: Web Development 2 - Assignments
  </h1>

  <div className="flex flex-col space-y-4">
    <Link href="/week-2" className="p-3 border rounded-md shadow-sm bg-purple-100">Go to Week 2 ↓</Link>
    <Link href="/week-3" className="p-3 border rounded-md shadow-sm bg-pink-200">Go to Week 3 ↓</Link>
    <Link href="/week-4" className="p-3 border rounded-md shadow-sm bg-green-200">Go to Week 4 ↓</Link>
    <Link href="/week-5" className="p-3 border rounded-md shadow-sm bg-purple-200">Go to Week 5 ↓</Link>
    <Link href="/week-6" className="p-3 border rounded-md shadow-sm bg-blue-200">Go to Week 6↓</Link>  
    <Link href="/week-7" className="p-3 border rounded-md shadow-sm bg-orange-200">Go to Week 7↓</Link>  
    <Link href="/week-8" className="p-3 border rounded-md shadow-sm bg-yellow-100">Go to Week 8↓</Link>  
  
  </div>
</main>
  );
}
