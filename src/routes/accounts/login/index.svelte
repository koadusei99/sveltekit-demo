<script>
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import { signin } from '$lib/auth';
	import { goto } from '$app/navigation';
	import routes from '$lib/config/routes';
	import { loginSchema as schema } from '$lib/utils/validators.js';
	import { user } from '../../../stores/stores.js';

	const submit = async (payload) => {
		const { success, message } = await signin(payload);
		if (!success) {
			return alert(message);
		}
		alert(message);
		console.log($user.user_metadata.profileCreated);
		if (!$user.user_metadata.profileCreated) {
			goto(`/${routes.createProfile}`);
			return;
		}
		goto(routes.home);
	};
	const { form, errors } = createForm({
		onSubmit(values) {
			submit(values);
		},
		extend: validator({ schema })
	});
</script>

<h1>Sign In</h1>
<p class="link"><a href="/signup">Create account</a></p>
<br />
<form use:form>
	<div>
		<label for="email">Email</label>
		<input type="email" id="email" name="email" />
		{#if $errors.email}
			<p>{$errors.email}</p>
		{/if}
	</div>

	<div>
		<label for="password">Password</label>
		<input type="text" id="password" name="password" />
		{#if $errors.password}
			<p>{$errors.password}</p>
		{/if}
	</div>

	<button type="submit">Sign in</button>
</form>
