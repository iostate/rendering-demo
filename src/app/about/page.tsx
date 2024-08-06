import { cookies } from 'next/headers';

export default function About() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  //   console.log(theme);
  console.log(cookieStore);
  return (
    <>
      <h1>About Page</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </>
  );
}
