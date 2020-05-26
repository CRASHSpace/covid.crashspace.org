const coverage = [


  {
    href:
      'https://www.thecorsaironline.com/corsair/crash-course-in-protective-equipment',
    organization: 'The Corsair',
    logo: 'media_logos/corsairlogo.png',
    title: 'A Crash Course in Protective Equipment',
    date: '5/20/2020'
  },
    {
    href:
      'https://www.palipost.com/pali-high-teacher-ramps-up-efforts-to-make-n95-fabric-masks/',
    organization: 'Palisadian-Post',
    logo: 'media_logos/Palisadian-Post-logo.jpg',
    title: 'Pali High Teacher Ramps Up Efforts to Make N95, Fabric Masks',
    date: '5/14/2020'
  }
  
]

export default () => (
  <>
    <div className="mt-12 mb-2 py-2 px-4 text-xl font-bold text-gray-900">
      Press
    </div>
    <div className=" flex flex-col flex-nowrap justify rounded-lg">
      {coverage.map(({ href, organization, logo, title, date }, i) => (
        <a
          href={href}
          key={i}
          className="block w-full rounded-lg over:bg-gray-100 text-base text-pink-600 overflow-hidden flex flex-col justify-between px-4 py-2"
        >
          <img
            className="mb-1 object-left object-scale-down h-15 w-full"
            src={logo}
          />
          <div className="text-xl font-medium hover:underline">{title}</div>
          {organization} - {date}
        </a>
      ))}
      <div className="mt-12 mb-2 py-2 px-4 text-center text-2xl font-bold text-gray-900">
        For media inquires contact us at{' '}
        <a
          href="mailto:covid@crashspace.org"
          className="block w-full rounded-lg over:bg-gray-100 text-pink-600 overflow-hidden flex flex-col justify-between px-4 py-2"
        >
          covid@crashspace.org
        </a>
      </div>
    </div>
  </>
)
