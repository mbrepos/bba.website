module.exports = {
  plugins: [
    [
      "@emotion",
      {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: "[local]",
        cssPropOptimization: true
      }
    ]
  ]
};