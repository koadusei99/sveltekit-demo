<script>
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import { register } from '$lib/auth';
	import { registerSchema as schema } from '$lib/utils/validators';
	import routes from '$lib/config/routes';

	const submit = async (payload) => {
		const { success, message } = await register(payload);
		if (!success) {
			return alert(message);
		}
		alert(message);
	};

	const { form, errors } = createForm({
		onSubmit(values) {
			values.id = `${Math.random()}${Date.now()}`;
			submit(values);
		},
		extend: validator({ schema })
	});
</script>

<h1>REGISTER</h1>
<p class="link"><a href={`/${routes.login}`}>Sign in</a></p>
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
	<div>
		<label for="confirmPassword">Confirm</label>
		<input type="text" id="confirmPassword" name="confirmPassword" />
	</div>
	<button type="submit">Register</button>
</form>
