import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import { generateRandomString } from "@/sources/utils";

export async function POST(request) {
  const body = await request.json();
  const {
    description,
    educations,
    email,
    experiences,
    firstName,
    lastName,
    phoneNumber,
    skills,
  } = body;

  const user = await prisma.student.create({
    data: {
      userId: generateRandomString(),
      description,
      educations,
      email,
      experiences,
      firstName,
      lastName,
      phoneNumber,
      skills,
    },
  });

  return NextResponse.json({ user });
}
