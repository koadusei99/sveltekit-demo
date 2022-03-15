import { supabase } from '$lib/config/supabase.js';
import { persistentWritable } from './persistentStore';

export const snippets = persistentWritable('snippets', []);

export const fetchAll = async () => {
	const { data, error } = await supabase.from('snippets').select();
	if (error) {
		return console.log(error);
	}
	snippets.set(data);
};

export const addSnippet = async (snippet) => {
	const { content, description } = snippet;
	const { data, error } = await supabase.from('snippets').insert([{ content, description }]);
	if (error) {
		return console.log(error);
	}
	snippets.update((cur) => [...cur, data]);
};
