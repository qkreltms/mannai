## mannai - 만나이 계산 라이브러리

## Install

`npm i mannai`

## Usage

`mannai(new Date("1995-01-15"), new Date("2020-01-15")) // should be => 25`

`mannai(new Date("1995-02-15"), new Date("2020-01-15")) // should be => 24`

`mannai(new Date("1995-01-15"), new Date("2020-01-14")) // should be => 24`

`mannai(new Date("2021-01-01"), new Date("2020-01-01")) // should be => 0`

`mannai(new Date("test")) // should be => NaN`

## Test

npm run test:c

```
 PASS  src/mannai.test.ts
  mannai
    √ Pivot date의 Month가 생년월일 보다 작을 때 나이를 추가하지 않아야 한다. (2 ms)
    √ Pivot date의 Day가 생년월일 보다 작을 때 나이를 추가하지 않아야 한다.
    √ Pivot date보다 생년월일이 더 미래일 때의 예외처리가 되어야한다.
    √ 잘 못된 날짜 값이 들어갔을 때 예외처리가 되어야 한다. (1 ms)

-----------|---------|----------|---------|---------|-------------------
| File        | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line #s   |
| ----------- | --------- | ---------- | --------- | --------- | ------------------- |
| All files   | 100       | 100        | 100       | 100       |
| mannai.ts   | 100       | 100        | 100       | 100       |
| ----------- | --------- | ---------- | --------- | --------- | ------------------- |
```
