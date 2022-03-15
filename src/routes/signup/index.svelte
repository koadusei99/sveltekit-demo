<script>
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { users } from '../../stores/stores.js';
	import { goto } from '$app/navigation';

	const schema = yup.object({
		username: yup.string().required().min(4),
		email: yup.string().email().required(),
		password: yup.string().required().min(8)
	});

	const register = (values) => {
		console.log(values);
		if ($users.find((user) => user.username === values.username)) {
			return alert('Username taken');
		}
		if ($users.find((user) => user.email === values.email)) {
			return alert('Email taken');
		}
		$users = [...$users, values];
		alert('Success');
		goto('/signin');
	};

	const { form, errors } = createForm({
		onSubmit(values, context) {
			values.id = `${Math.random()}${Date.now()}`;
			register(values);
		},
		extend: validator({ schema })
	});
</script>

<h1>REGISTER</h1>
<p class="link"><a href="/signin">Sign in</a></p>
<br />
<form use:form>
	<div>
		<label for="username">Username</label>
		<input type="text" id="username" name="username" />
		{#if $errors.username}
			<p>{$errors.username}</p>
		{/if}
	</div>
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
