import * as yup from 'yup';
import 'yup-phone';

export const loginSchema = yup.object({
  emailOrPhone: yup
    .string()
    .required('مقدار فیلد نباید خالی باشد')
    .test('test', 'ایمیل یا شماره موبایل اشتباه است', (value): any => {
      if (value) {
        if (isNaN(+value)) {
          return yup.string().email().isValid(value);
        } else {
          return yup.string().phone('IR').isValid(value);
        }
      }
    }),
});
