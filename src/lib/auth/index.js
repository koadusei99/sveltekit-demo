import { supabase } from '$lib/config/supabase.js';
import { messages } from '$lib/utils/constants.js';
import dayjs from 'dayjs';
import { session as userSession, user as currentUser } from '../../stores/stores.js';

export const signin = async (values) => {
	let success = false;
	const { user, session, error } = await supabase.auth.signIn(values);
	if (error) {
		const message = error.status === 500 ? messages.serverError : error.message;
		return { success, message };
	}
	success = true;
	userSession.set({
		token: session.access_token,
		expireAt: dayjs().add(session.expires_in, 'minute')
	});
	currentUser.set(user);
	return { success, message: messages.accountLogin };
};

export const register = async (values) => {
	let success = false;
	const { error } = await supabase.auth.signUp(values, { data: { profileCreated: false } });
	if (error) {
		const message = error.status === 500 ? messages.serverError : error.message;
		return { success, message };
	}
	return { success: true, message: messages.accountCreated };
};
