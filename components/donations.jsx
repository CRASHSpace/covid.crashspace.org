import React, { useState, useEffect } from 'react'

export default ({ limit }) => {
  const [hasError, setErrors] = useState(false)
  const [data, setData] = useState({})

  async function fetchData() {
    const res = await fetch('/api/v1/system')
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="sm:rounded-md p-2  hover:no-underline">
      <a
        href="https://bit.ly/crashcovid-donate"
        className=" rounded-lg inline-block w-full hover:no-underline md:max-w-sm  hover:opacity-75"
      >
        <div className="flex items-baseline">
          <p className="text-4xl leading-8 mb-1 font-medium text-white ">
            {'$31,822'}
          </p>
        </div>
        <span className="flex justify-between">
          <p className="text-base leading-6 font-medium text-white hover:no-underline">
            Total raised &rarr;
          </p>
        </span>
      </a>
    </div>
  )
}
