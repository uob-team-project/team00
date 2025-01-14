import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 28730,
  login: '2!x@NK8\\auEg1\\!y\\V78V\\p0hD4V\\rm0',
};

export const sampleWithPartialData: IUser = {
  id: 22999,
  login: 'ruHI',
};

export const sampleWithFullData: IUser = {
  id: 24352,
  login: 'gt',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
