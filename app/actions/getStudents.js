export default async function getStudents(numberElements = 1) {
  try {
    const students = await prisma.student.findMany({
      take: numberElements,
    });

    if (!students.length) {
      return null;
    }

    const safeStudents = students.map((student) => ({
      ...student,
      createdAt: student.createdAt.toString(),
    }));

    return safeStudents;
  } catch (error) {
    return null;
  }
}
