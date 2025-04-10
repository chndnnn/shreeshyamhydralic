import logo from './../assets/Logo.jpg'

const Header = ({}) => {
      return(
         <div class=" flex mx-4 my-8 items-center justify-between">
             <div className='border w-[60px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden'>
  <img src={logo} alt="" className='object-cover w-full h-full' />
</div>

          <div className="flex items-center  justify-end   gap-6 text-green-500 ">
          <div>
          <h1 class="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
  <span class="text-2xl md:text-6xl font-extrabold text-green-600">S</span>
  <span class="bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 bg-clip-text text-transparent font-sans">
    HREE SHYAM HYDRAULIC
  </span>
</h1>


</div>

               
        </div>    
        </div>
      )
}
 export default Header