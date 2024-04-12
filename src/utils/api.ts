export const readToken = () => {
  const Token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('token'))
    ?.split('=')[1];
  return Token;
};
