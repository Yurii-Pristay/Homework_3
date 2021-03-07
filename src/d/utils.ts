export const isCamelCase = (msg: string) => /[A-Z]/.test(msg.substring(1));

export const camelToSnake = (msg: string) => {
  return msg.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
};

export const isPalindrome = (msg: string) => {
  return (msg === msg.split('').reverse().join(''));
};
