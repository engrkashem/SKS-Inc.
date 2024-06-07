export const gender = [
  ['Male', 'male'],
  ['Female', 'female'],
  ['Other', 'other'],
];

export const genderOptions = gender.map((item) => ({
  value: item[1],
  label: item[0],
}));
