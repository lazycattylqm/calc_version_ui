import { atom } from 'jotai';

export const gitOwnerAtom = atom<string>('');
export const gitRepoAtom = atom<string>('');
export const envAtom = atom<'sde3' | 'sde4' | ''>('');
export const dateAtom = atom<string>('');
export const currentStepAtom = atom<'owner' | 'repo' | 'env' | 'date' | 'summary'>('owner');
