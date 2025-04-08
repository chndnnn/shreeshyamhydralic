import IMG1 from './../assets/IMG1.jpg'
import IMG2 from './../assets/IMG2.jpg'
import IMG3 from './../assets/IMG3.jpg'
import IMG4 from './../assets/IMG4.jpg'
import IMG5 from './../assets/IMG5.jpg'
import IMG6 from './../assets/IMG6.jpg'
import IMG7 from './../assets/IMG7.jpg'
import IMG8 from './../assets/IMG8.jpg'
import IMG9 from './../assets/IMG8.jpg'
import IMG10 from './../assets/IMG8.jpg'


const ShowImages = ()=>{
    let images = [IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7,IMG8,IMG9,IMG10]
    return <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {images.map((ele)=>{
           return <div className='md:h-[200px]'>
           <img src={ele} alt="" className='object-cover w-full h-full' />
         </div>
        })}
        
    </div>
}

export default ShowImages