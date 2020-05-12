export default ({ children }) => (
  <div className="bg-white">
    <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        <div className="px-5 py-2">
          <a
            href="https://twitter.com/crashspaceLA/"
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Twitter
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="https://github.com/CRASHSpace/COVID-19-3dprints"
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Github
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="https://www.facebook.com/crashspacela/"
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Facebook
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="https://vercel.com?utm_source=crashcovid"
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Powered by Vercel
          </a>
        </div>
      </nav>
    </div>
  </div>
)
