import * as yup from 'yup';

export const loginSchema = yup.object({
	email: yup.string().required().min(4),
	password: yup.string().required().min(8)
});
export const registerSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required().min(8)
});
