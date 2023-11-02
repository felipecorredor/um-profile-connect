import prisma from "@/app/libs/prismadb";

export default async function getStudents() {
  try {
    const students = await prisma.student.findMany();

    const safeStudents = students.map((student) => ({
      ...student,
      createdAt: student.createdAt.toString(),
    }));

    return safeStudents;
  } catch (error) {
    throw new Error(error);
  }
}
