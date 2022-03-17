<script>
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	const createProfile = (values) => {
		console.log(values);
	};

	const schema = yup.object({
		username: yup.string().required().min(4),
		first_name: yup.string().required().min(2),
		last_name: yup.string().required().min(2),
		bio: yup.string().required().min(2),
		github: yup.string().required().min(2)
	});

	const { form, errors } = createForm({
		onSubmit(values, context) {
			createProfile(values);
		},
		extend: validator({ schema })
	});
</script>

<section>
	<form use:form>
		<div>
			<label for="username">Username</label>
			<input type="username" id="username" name="username" />
			{#if $errors.username}
				<p>{$errors.username}</p>
			{/if}
		</div>
		<div>
			<label for="first_name">First Name</label>
			<input type="first_name" id="first_name" name="first_name" />
			{#if $errors.first_name}
				<p>{$errors.first_name}</p>
			{/if}
		</div>
		<div>
			<label for="last_name">Last Name</label>
			<input type="last_name" id="last_name" name="last_name" />
			{#if $errors.last_name}
				<p>{$errors.last_name}</p>
			{/if}
		</div>

		<div>
			<label for="bio">Bio</label>
			<textarea name="bio" id="bio" />
			{#if $errors.bio}
				<p>{$errors.bio}</p>
			{/if}
		</div>
		<div>
			<label for="github">Github</label>
			<input type="github" id="github" name="github" />
			{#if $errors.github}
				<p>{$errors.github}</p>
			{/if}
		</div>
		<button type="submit">Finish Up🚀</button>
	</form>
</section>
