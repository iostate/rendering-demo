import 'server-only';
export const serverUtils = () => {
  console.log(
    `use multiple libraries, access env variables, interact w/ database, process confidential information`
  );
  return 'server result';
};
