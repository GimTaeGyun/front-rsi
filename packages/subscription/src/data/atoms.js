import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import axios from "../utils/axios";

// Agreement
const AgreementData = atomWithStorage();

// SignUp
const SignupData = atom();

const SignupUser = async (data) => {
  const response = await axios.post(
    '/management/subscription/customer/signup',
    data
  );

  return response.data;
};

const CheckLoginId = async (data) => {
  const response = await axios.post(
    '/management/subscription/customer/check',
    data
  );

  if (response.data.code !== "0000") {
    return false;
  } else {
    return true;
  } 
};

export { SignupData, AgreementData, SignupUser, CheckLoginId };
