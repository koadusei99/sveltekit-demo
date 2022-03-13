import { persistentWritable } from './persistentStore';

export const token = persistentWritable('token', 0);
export const user = persistentWritable('user', { username: '', email: '' });
export const users = persistentWritable('users', []);
export const snippets = persistentWritable('snippets', []);
