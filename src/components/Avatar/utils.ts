export const getAvatarURLBasedOnName = (
  firstName: string = '',
  lastName: string = '',
) => {
  return `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=F9F5FF&color=7F56D9&bold=true`;
};
