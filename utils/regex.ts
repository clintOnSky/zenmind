// export const phoneNumberRegex = /^\d{10}|\d{11}$/;
export const phoneNumberRegex = /^(?:\+\d{13}|234\d{10}|\d{11})$/;
export const numbersOnlyRegex = /^\d+$/;
export const anyCharacterRegex = /\w/;
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
