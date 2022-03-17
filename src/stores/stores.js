import { persistentWritable } from './persistentStore';

export const session = persistentWritable('session', { token: '', expireAt: Date.now() });
export const user = persistentWritable('user', {});
