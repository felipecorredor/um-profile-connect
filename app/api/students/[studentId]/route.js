import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function GET(request) {
  if (!request.url || typeof request.url !== "string") {
    throw new Error("Invalid ID");
  }

  const studentId = request.url.substring(request.url.lastIndexOf("/") + 1);

  const student = await prisma.student.findUnique({
    where: {
      id: studentId,
    },
  });

  if (!student) {
    return null;
  }

  return NextResponse.json({ student });
}