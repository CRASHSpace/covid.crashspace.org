import TotalCount from '../components/totalcount'
import Donations from '../components/donations'
import Social from '../components/social'
import Photos from '../components/photos'
import RequestButton from '../components/modal'
import Footer from '../components/footer'
import Link from 'next/link'

export default () => (
  <div className="w-full" id="home">
    <div className="mt-0 p-8 sm:px-12 sm:py-12 md:pb-20 bg-cool-gray-900">
      <div className="mx-auto max-w-screen-md xl:max-w-screen-xl w-full flex justify-start xl:justify-around items-start flex-wrap ">
        <div className="text-3xl mx-auto md:m-0 md:max-w-3xl md:text-5xl leading-tight font-black flex items-start flex-wrap text-gray-50 mb-4 sm:mb-12 ">
          Providing protection to those on the frontlines of the COVID crisis.
          <div className="hidden md:flex pt-12 w-full mx-auto flex-wrap justify-start md:flex-nowrap">
            <TotalCount />
            <Donations />
          </div>
        </div>
        <div className="relative m-0 w-full lg:max-w-sm mb-8 p-0 md:pt-12 lg:p-0">
          <div className="flex flex-row flex-wrap md:flex-no-wrap justify-between rounded-lg">
            <div className="w-full rounded-lg bg-cool-gray-50 m-2 overflow-hidden flex flex-col justify-between p-6">
              <div className="items-baseline">
                <div className="text-cool-gray-900 pb-3 items-baseline text-black text-xl md:text-2xl leading-tight font-semibold">
                  Are you an organization or healthcare worker in need of PPE?
                </div>
              </div>
              <div className="rounded-md ">
                {/* TODO Replace with LA info */}
                <a
                  href="https://bit.ly/crashcovid-request"
                  className=" flex items-center justify-center text-white px-2 py-3 bg-cool-gray-900 text-white font-medium rounded-lg"
                >
                  Request PPE
                </a>
              </div>
            </div>
          </div>
          <div className="visible md:hidden pt-12 w-full mx-auto flex flex-wrap justify-start md:flex-nowrap">
            <TotalCount />
            <Donations />
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-3xl mx-auto pt-8">
      <div className="flex-1 mt-4 mb-6 p-4 rounded-lg">
        <p className="text-md leading-normal text-gray-700">
We're mobilzing a collective effort of technologists and artists, hobbyists and aerospace engineers, science teachers and scientists, to join forces to respond to COVID-19. 
<br>We've shown our capacity to build a distributed manufacturing network across Los Angeles and produce thousand approved personal protection equipment designs that were requested and put into use by clincians at local hospitals including Cedars-Sinai and USC Keck.
<br>We have the tools, the know-how, and the ability to rapidly respond to the challenges that are yet to come. But we need your help. </p>
<br>Are you a maker who wants to bring your skills to the cause, a medical professional in need of support, or a community member who wants to make a difference? Join our fight by donating your time, materials, or funding to protect those on the frontlines of COVID-19. 

          By helping save their lives, we can help them save us all.
        </p>
        <p className="text-md leading-normal text-gray-700">
          Organization 1, Organization 2, Organization 3, and others.
        </p>
        <a className="text-base mr-4" href="/about">
          Learn More
        </a>
        <a className="text-base" href="https://github.com/CRASHSpace/COVID-19-3dprints">
          Supported Designs
        </a>
      </div>
      <Photos />
    </div>
  </div>
)
