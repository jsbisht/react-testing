// mock filename should match with filename of test file or module being mocked?
jest.mock("./http-call");

const { fetchData } = require("./http-call");

test("should get value from the promise", () => {
  fetchData().then((resp) => {
    expect(resp).toEqual({ msg: "hello world" });
  });
});
