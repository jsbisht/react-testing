const { fetchData } = require("./axios");

test("should get value from the promise", async () => {
  const result = await fetchData();
  expect(result).toEqual({ msg: "hello world" });
});
