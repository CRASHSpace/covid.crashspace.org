export default () => (
  <div className="flex flex-col p-4">
    <div className="flex flex-wrap md:flex-no-wrap justify-start">
      <span className="rounded-lg overflow-hidden md:w-1/3">
        <img
          className="h-full w-full max-w-xs mx-auto object-cover"
          src="distribution/USC_CRASH_thanks.jpg"
        />
      </span>
      <span className="w-4 h-4"></span>

      <span className="rounded-lg overflow-hidden md:w-1/3">
        <img
          className="h-full w-full max-w-md mx-auto object-cover"
          src="/distribution/masks_prints.jpg"
        />
      </span>
      <span className="w-4 h-4"></span>

      <span className="rounded-lg overflow-hidden md:w-1/3">
        <img
          className="h-full w-full max-w-xs mx-auto object-cover"
          src="distribution/assembly_team.jpg"
        />
      </span>
    </div>
  </div>
)
