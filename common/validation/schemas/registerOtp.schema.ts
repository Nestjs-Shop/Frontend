import * as yup from 'yup';

export const registerOtpSchema = yup.object({
  regOtp: yup
    .string()
    .required('مقدار فیلد نباید خالی باشد')
    .length(6, 'کد تایید باید 6 رقمی باشد'),
});