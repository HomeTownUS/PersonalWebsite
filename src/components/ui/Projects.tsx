import Splendor from "@/assets/SplendorScreenshot.png"

function Projects() {
  return (
    <>
      <div className="flex-1 flex flex-col items-center text-center px-4 font-mono">
        <h1 className='mb-4 underline'>Projects Page</h1>
        <div className="flex flex-col min-h-[50dvh] w-[90vw] border-b border-gray-300 rounded-lg">
          <h2 className="text-4xl font-italic font-bold mb-4">Splendor:</h2>
          <div className="flex h-full w-full" >
            <div className="w-1/2 h-full flex items-center justify-center p-4">
              <img className="max-h-[48dvh] object-contain rounded-lg" src={Splendor} alt="Splendor Screenshot" />
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl italic mb-4">Description</h3>
              <p className="blurb max-w-md">
                Splendor is a board game where players collect gems to buy cards and build a deck of cards. I created a digital version of this game using Python and Pygame.
              </p>
              <h3 className="text-2xl italic mb-4 mt-4">Purpose</h3>
              <p className="blurb max-w-md">
                The purpose of this project was for my software engineering class. This project was developed to follow an agile development process and had two releases, one for the midterm and the other as the final. I also wanted to create a digital version of a game that I enjoy playing and was familiar with.
              </p>
            </div>
          </div>
        </div>
        <p>This page is under construction. Please check back later.</p>
      </div>
    </>
  )
}

export default Projects