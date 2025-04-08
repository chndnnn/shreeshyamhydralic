const Banner  = ({setActiveItem})=>{
    return <section className="bg-white lg:grid lg:place-content-center  ">
    <div className="mx-auto w-screen max-w-screen-xl px-2 py-10">
      <div className="mx-auto max-w-prose text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Specialist Hydraulics &   
          <strong className="text-indigo-600">Pneumatics  </strong>
          Hydraulic Service
        </h1>
  
        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Quick Solutions for Long-Lasting Performance
        </p>
  
        <div className="mt-4 flex justify-center gap-4 sm:mt-6">
          <a
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            href="#"
            onClick={()=>setActiveItem(0)}
          >
            Contact us
          </a>
  
          <a
            className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
            href="#"
            onClick={()=>setActiveItem(1)}
          >
            About us
          </a>
        </div>
      </div>
    </div>
  </section>
}

export default Banner