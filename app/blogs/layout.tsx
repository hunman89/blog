export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>PostLayout</h1>
      {children}
    </section>
  );
}
