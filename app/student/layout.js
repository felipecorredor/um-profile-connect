import getCurrentUser from "../actions/getCurrentUser";
import Layout from "../layout/Layout";

export default async function StudentLayout({
  children, // will be a page or nested layout
}) {
  const currentUser = await getCurrentUser();

  return <Layout currentUser={currentUser}>{children}</Layout>;
}
