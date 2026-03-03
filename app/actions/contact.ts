"use server";

// This runs entirely on the server. It hides your API keys and logic from the browser.
export async function submitInquiry(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const inquiryType = formData.get("inquiryType");

  // 1. Validate the data (Crucial for real-world apps!)
  if (!name || !email) {
    return { success: false, message: "Please complete all required fields." };
  }

  // 2. Simulate a secure network request for your portfolio demo
  // This forces a 2-second delay so the user can see your sleek loading state
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 3. THE REAL WORLD CONNECTION:
  // When you are ready to receive real emails, you would put your Resend or SendGrid API code right here!
  // Example: await resend.emails.send({ to: 'your-email@gmail.com', subject: 'New Lead', ... })

  // 4. Return the success state to the frontend
  return { 
    success: true, 
    message: "Identity verified. A managing partner will contact you shortly." 
  };
}