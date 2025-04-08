import googleMap from './../assets/googlemap.jpg'; // Make sure to import your image

const GoogleMapRedirect = () => {
  return (
    <a
      href="https://www.google.com/maps/contrib/101954588379329367440/photos/@19.7860603,72.7654596,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" // Replace with the actual coordinates or location URL
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security measure
    >
      <img src={googleMap} alt="Google Map" className="w-full md:w-[100px] mt-2" />
    </a>
  );
};

export default GoogleMapRedirect;
