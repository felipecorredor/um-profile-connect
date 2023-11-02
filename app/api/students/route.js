import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

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
      userId: "652dbc36f246ea39ea7d5b27",
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
