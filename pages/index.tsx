import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 font-sans">
      <main className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-800">
          Welcome to My Unique Next.js Page
        </h1>

        <div className="mb-8 text-center">
          <Image
            className="mx-auto animate-bounce"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={120}
            height={120}
            priority
          />
        </div>

        <p className="text-lg mb-6 text-center text-gray-700">
          This page is unlike any other on the internet. It&apos;s a blend of
          creativity and functionality!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-purple-100 p-4 rounded-lg shadow-md transform hover:rotate-3 transition-transform">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">
              Unique Feature 1
            </h2>
            <p className="text-gray-600">
              This feature is so unique, it doesn&apos;t even exist yet!
            </p>
          </div>
          <div className="bg-pink-100 p-4 rounded-lg shadow-md transform hover:-rotate-3 transition-transform">
            <h2 className="text-xl font-semibold mb-2 text-pink-700">
              Unique Feature 2
            </h2>
            <p className="text-gray-600">
              Imagine a feature so cool, it gives you goosebumps.
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            href="/home"
            className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
          >
            Go to Home
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
          >
            Learn More
          </a>
        </div>
      </main>

      <footer className="mt-12 text-center text-white">
        <p>© 2023 My Unique Next.js Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
