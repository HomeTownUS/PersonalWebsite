import { SignInButton } from "./SignInButton"

function Contact() {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-italic mb-4">Contact Me</h1>
        <SignInButton />
        <div>
          <h3 className="text-2xl mb-2">Why Sign In?</h3>
          <p className="blurb max-w-lg mb-6">
            Signing in is a form of verification that helps me ensure that the messages I receive are from genuine users. This helps me manage and respond to inquiries more effectively.
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact