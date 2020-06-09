/**
 * 주어진 생일값과 현재 날짜값에 따라서 만 나이를 구한다.
 * @param birthday
 * @param pivot
 */
export default (birthday: Date, pivot: Date = new Date()): number => {
  const birthYear = birthday.getFullYear();
  const birthMonth = birthday.getMonth() + 1;
  const birthDate = birthday.getDate();

  const now = pivot;
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();

  let age = nowYear - birthYear;

  if (birthMonth > nowMonth) {
    age--;
  } else if (birthMonth === nowMonth) {
    // 태어난 날이 현재 보다 적으면 아직 생일 전이므로 나이를 먹지 않는다.
    if (birthDate > nowDate) {
      age--;
    }
  }
  // 미래에 태어났을 경우
  if (age < 0) {
    age = 0;
  }

  return age;
};
