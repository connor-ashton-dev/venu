import { NextApiRequest } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const res = await request.json();
  const name = res.name;
  const email = res.email;
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    console.log(user);
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: 'Error' }));
  }

  return new Response(JSON.stringify({ message: 'Hello, Next.js!' }));
}
