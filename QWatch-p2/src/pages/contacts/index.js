
import Link from 'next/link'
function ContactPage() {
  return (
    <div>
      <div className="bg-gray-100">


{/* Hero section */}
<section className="bg-indigo-500 py-20 px-6 text-center text-white">
  <h1 className="text-4xl font-bold mb-4">Welcome to QWatch!</h1>
  <p className="text-lg mb-8">Don't wait for success, QWatch it happen.</p>
  <Link href="/study" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Join the Q</Link>
</section>


{/* About section */}
<section className="py-20 px-6">
  <h2 className="text-4xl font-bold mb-4 text-center">Why this idea?</h2>
  <p className="text-lg mb-8 text-left">Students often spend close to an hour or more standing in queues to eat at the university, and they waste time wandering around the campus trying to find available study rooms. 
QWatch is a comprehensive WebApp and MobileApp that enables users to check the queue status of canteens, including the number of people in the queue and the estimated waiting time. By providing estimated waiting times, users can quickly evaluate whether they have enough time to wait in line or if they should consider other dining options. This is especially useful to ensure that people with time constraints arrive at their destination on time. 

</p>
<p className="text-lg mb-8 text-left">And how are we going to solve this? </p>
<p className="text-lg mb-8 text-left">Let us present you QWatch!</p>

<p className="text-lg mb-8 text-left">Furthermore, QWatch enables users to check the availability of study rooms in their college and determine which rooms are vacant or occupied. In addition, the app allows users to find fellow students who are studying the same subject or working on similar projects. Collaborating with others is often more productive than working independently, and QWatch makes it easier to connect with like-minded individuals.</p>

<p className="text-lg mb-8 text-left">QWatch is a comprehensive WebApp and MobileApp that enables users to check the queue status of canteens, including the number of people in the queue and the estimated waiting time. By providing estimated waiting times, users can quickly evaluate whether they have enough time to wait in line or if they should consider other dining options. This is especially useful to ensure that people with time constraints arrive at their destination on time. 

</p>
</section>

<section className="bg-indigo-500 py-20 px-6 text-left text-white">
  <h1 className="ml-10 text-4xl font-bold mb-10">Our Project:</h1>
  <p className="ml-20  text-lg  font-bold mb-4">Technologies Used :
    </p>
    {/* <div className="ml-20 text-left flex">
  <p className="text-lg mb-2 flex-1">* React</p>
  <p className="text-lg mb-2 flex-1">* Tailwind</p>
  <p className="text-lg mb-8 flex-1">* Prisma</p>
  
</div> */}
<div className="ml-20 mb-8 text-left flex ">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="h-16 mr-4 mx-16" alt="React Logo" />
  <img src="https://static-00.iconduck.com/assets.00/brand-nextjs-icon-256x256-zm2coebd.png" className="h-16 mr-4 mx-16" alt="Next Logo" />

  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" className="h-16 mr-4 mx-16 " alt="Tailwind Logo" />
  <img src="https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png" className="h-16 mr-4 mx-16" alt="Prisma Logo" />
</div>



  <p className="ml-20  text-lg font-bold mb-4">Our Team: :
    </p>

 <div className="ml-20">
  <div className="flex items-center">
    <p className="hover:text-black transition duration-300 ease-in-out text-lg font-bold">
      <a href="https://github.com/epictetusmind" target="_blank" rel="noopener noreferrer">
        * {'Amélia Shan'}
      </a>
    </p>
  </div>
  <div className="flex items-center">
    <p className="text-lg font-bold">
      <a className="hover:text-black transition duration-300 ease-in-out" href="https://github.com/wisewizardofthestars" target="_blank" rel="noopener noreferrer">
        * {'Sara Rijo'}
      </a>
    </p>
  </div>
  <div className="flex items-center">
    <p className="hover:text-black transition duration-300 ease-in-out text-lg font-bold">
      <a href="https://github.com/in5omnia" target="_blank" rel="noopener noreferrer">
        * {'Beatriz Gavilan'}
      </a>
    </p>
  </div>
  <div className="flex items-center">
    <p className="hover:text-black transition duration-300 ease-in-out text-lg font-bold">
      <a href="https://github.com/powy-e" target="_blank" rel="noopener noreferrer">
        * {'Eduardo Nazário'}
      </a>
    </p>
  </div>
</div>




</section>




</div>
    </div>
  );
}

export default ContactPage;
