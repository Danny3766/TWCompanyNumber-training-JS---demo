const validCompanyNumber = require("../src/company.js");

describe("台灣公司統編驗證", () => {
  it("無效的公司統編", () => {
    const result = validCompanyNumber("88117126");
    expect(result).toBe(false);
  });

  it("有效的公司統編（一般）", () => {
    const result = validCompanyNumber("53212539");
    expect(result).toBe(true);
  });

  it("有效的公司統編（第 7 碼是 7）", () => {
    const result = validCompanyNumber("10458575");
    expect(result).toBe(true);
  });

  it("有效的公司統編（第 7 碼是 7）", () => {
    const result = validCompanyNumber("10458574");
    expect(result).toBe(true);
  });
});
