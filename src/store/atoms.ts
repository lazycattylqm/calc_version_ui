import { atom } from 'jotai';

export const gitOwnerAtom = atom<string>('');
export const gitRepoAtom = atom<string>('');
export const currentStepAtom = atom<'owner' | 'repo'>('owner');
