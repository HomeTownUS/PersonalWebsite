import codeImg from "@/assets/code.img.png"
import selfie from "@/assets/Selfie.jpg"

function About() {
  return (
    <>
      <div className="flex-1 flex flex-col items-center text-center px-4 font-serif">
        <h1 className='mb-4'>About Page</h1>
        <div className="flex min-h-[50dvh] w-[90vw] border-b border-gray-300 rounded-lg">
          <div className="w-1/2 h-full flex items-center justify-center p-4">
            <img className="max-h-[48dvh] object-contain rounded-lg" src={selfie} alt="Selfie of myself" />
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center text-center">
            <h3 className="text-4xl font-italic mb-4">Why Software?</h3>
            <p className="blurb max-w-md">
                From a young age I have always known that I wanted to be an engineer. Not having the vocabulary at the time, I gave a presentation in my first year of middle school how I wanted to be a person who builds things. In high school I was signed up for the introductary computer science course which I enjoyed so much that I dropped my only free period the next semester to be able to graduate with AP Computer Science. I have since been pursuing a degree in Computer Science at Grand Valley State University where I have enjoyed learning about computer science and multiple programming languages. Software development is a field that is always changing and evolving, which keeps me on my toes and constantly learning new things.
            </p>
          </div>
        </div>
        <div className="flex min-h-[50dvh] w-9/10 border-b border-gray-200 rounded-lg">
          <div className="w-1/2 flex-1 flex flex-col items-center justify-center text-center">
            <h3 className="text-4xl font-italic">Programming Languages</h3>
            <p className="blurb max-w-md">I have experience with a variety of programming languages including Python, Java, C, C++, Kotlin, Swift, JavaScript, and TypeScript. I have also worked with frameworks like React, Vue, and Node.js.</p>
          </div>
          <div className="w-1/2 h-full">
            <img src={codeImg} alt="" />
          </div>
        </div>
        {/*Item framework:
        <div className="flex min-h-[50dvh] w-9/10 border-b border-gray-200 rounded-lg">
          <div className="w-1/2 h-full">
            {future image}
          </div>
          <div className="w-1/2 h-full">
            {future text}
          </div>
        </div> */}
        <p className="mt-4">This page is still under construction. Please check back later for more updates.</p>
      </div>
    </>
  )
}

export default About