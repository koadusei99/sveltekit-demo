<script>
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { user as currentUser, users, token } from '../../stores/stores.js';
	import { goto } from '$app/navigation';

	const schema = yup.object({
		username: yup.string().required().min(4),
		password: yup.string().required().min(8)
	});

	const findUser = (identity) => {
		return $users.find((user) => user.username === identity || user.email === identity);
	};
	const authn = (user, password) => {
		if (user && user.password === password) {
			const { username, email } = user;
			$currentUser = { username, email };
			alert('OK');
			$token = Date.now() + 30 * 60 * 1000;
			goto('/home');
			return;
		}
		alert('NO');
	};

	const signin = (values) => {
		console.log(values);
		const user = findUser(values.username);
		authn(user, values.password);
	};

	const { form, errors } = createForm({
		onSubmit(values, context) {
			signin(values);
		},
		extend: validator({ schema })
	});
</script>

<h1>SIgn In</h1>
<form use:form>
	<div>
		<label for="username">Username or Email</label>
		<input type="text" id="username" name="username" />
		{#if $errors.username}
			<p>{$errors.username}</p>
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
