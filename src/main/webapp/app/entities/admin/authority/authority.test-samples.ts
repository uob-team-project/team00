import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e0254653-efad-44bd-b8e0-1fe5b1770600',
};

export const sampleWithPartialData: IAuthority = {
  name: '3048ca93-28cd-4958-835d-28d6a4efe186',
};

export const sampleWithFullData: IAuthority = {
  name: 'bc3a025e-9537-4aec-b59a-970886f7e2cc',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
