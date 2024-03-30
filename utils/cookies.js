import Cookies from "js-cookie";

export const isBlank = (str) => {
  return !str || /^\s*$/.test(str);
};
const setCookie = ({ name, value }) => {
  Cookies.set(name, value);
};

const deleteCookie = (name) => {
  Cookies.remove(name);
};
const _getCookies = (key) => {
  return Cookies.get(key);
};

export { setCookie, deleteCookie,_getCookies };
