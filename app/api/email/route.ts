import { Resend } from "resend";

interface ResendEmail {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export const POST = async (request: Request) => {
  const requestBody = await request.json();

  if (
    !requestBody.firstName ||
    !requestBody.lastName ||
    !requestBody.userEmail ||
    !requestBody.message
  ) {
    return new Response(null, { status: 400 });
  }

  const { firstName, lastName, userEmail, message } = requestBody;

  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  const email: ResendEmail = {
    from: "Braden Hirschi <braden@kbh-creative.com>",
    to: "bradenhirschi29@gmail.com",
    subject: "KBH Creative contact form",
    html: `<p>Email recieved from ${firstName} ${lastName} (${userEmail}). Message: ${message}</p>`,
  };

  await resend.emails.send(email);

  return new Response(null, { status: 200 });
};
