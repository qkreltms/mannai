import mannai from "./mannai";

describe("mannai", function () {
  it("나이를 먹는다.", function () {
    expect(mannai(new Date("1995-01-15"), new Date("2020-01-15"))).toBe(25);
  });
  it("Pivot date의 Month가 생년월일 보다 작을 때 나이를 추가하지 않아야 한다.", function () {
    expect(mannai(new Date("1995-02-15"), new Date("2020-01-15"))).toBe(24);
  });
  it("Pivot date의 Day가 생년월일 보다 작을 때 나이를 추가하지 않아야 한다.", function () {
    expect(mannai(new Date("1995-01-15"), new Date("2020-01-14"))).toBe(24);
  });
  it("Pivot date보다 생년월일이 더 미래일 때의 예외처리가 되어야한다.", function () {
    expect(mannai(new Date("2021-01-01"), new Date("2020-01-01"))).toBe(0);
  });
  it("잘 못된 날짜 값이 들어갔을 때 예외처리가 되어야 한다.", function () {
    expect(mannai(new Date("test"))).toBe(NaN);
  });
});
