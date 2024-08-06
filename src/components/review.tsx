export default async function Review() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return (
    <>
      <h2>Review</h2>
    </>
  );
}
