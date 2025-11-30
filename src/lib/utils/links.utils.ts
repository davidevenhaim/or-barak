const getEmailLink = (email: string) => {
  return `mailto:${email}`;
};

const getPhoneLink = (phone: string) => {
  return `tel:${phone}`;
};

const getInstagramLink = (username: string) => {
  return `https://www.instagram.com/${username}`;
};

const getWhatsappLink = (phone: string) => {
  return `https://wa.me/${phone}`;
};

export { getEmailLink, getPhoneLink, getInstagramLink, getWhatsappLink };
