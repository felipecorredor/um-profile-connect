import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getStudentById() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const student = await prisma.student.findUnique({
      where: {
        userId: currentUser.id,
      },
    });

    if (!student) {
      return null;
    }

    return {
      ...student,
      createdAt: student.createdAt.toString(),
    };
  } catch (error) {
    throw new Error(error);
  }
}
