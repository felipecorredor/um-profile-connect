import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request) {
  const body = await request.json();

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const {
    description,
    educations,
    email,
    experiences,
    firstName,
    lastName,
    position,
    skills,
    imageSrc,
    semester,
  } = body;

  const student = await prisma.student.create({
    data: {
      userId: currentUser.id,
      description,
      educations,
      email,
      experiences,
      firstName,
      lastName,
      position,
      skills,
      imageSrc,
      semester,
    },
  });

  return NextResponse.json({ student });
}

export async function GET() {
  const students = await prisma.student.findMany();

  return NextResponse.json({ students });
}
