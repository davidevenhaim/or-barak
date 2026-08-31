const getEmailLink = (email: string) => {
  return `mailto:${email}`;
};

const getInstagramLink = (username: string) => {
  return `https://www.instagram.com/${username}`;
};

export { getEmailLink, getInstagramLink };
