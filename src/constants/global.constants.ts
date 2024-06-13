export const gender = [
  ['Male', 'male'],
  ['Female', 'female'],
  ['Other', 'other'],
];

export const genderOptions = gender.map((item) => ({
  value: item[1],
  label: item[0],
}));

export const userRole = {
  SUPER_ADMIN: 'superAdmin',
  ADMIN: 'admin',
  MANAGER: 'manager',
  EMPLOYEE: 'employee',
  USER: 'user',
};

export const THEME_ORANGE_COLOR = '#FFB455';
