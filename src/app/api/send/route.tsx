import { ResponseData } from '@/app/component/EmailSection';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';


const resend: Resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail: string = process.env.FROM_EMAIL as string;

interface RequestApi{
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: RequestApi, res: ResponseData) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [email, fromEmail],
      subject: subject,
      react: (
        <>
            
            <p>Thank you for contacting me! I will do my best to get back to you regarding the following:</p>
            <p>{message}</p>
            
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });;
  }
}