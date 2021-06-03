module.exports = function (wallaby) {
  return {
    autoDetect: true,
    tests: ["src/**/*.spec.ts", "!src/**/not-executed.component.spec.ts"],
  };
};
