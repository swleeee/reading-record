module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],

  // TODO: 확인 후 정리 필요
  plugins: [
    // '@emotion/babel-plugin',
    // 'babel-plugin-macros',
    // 'babel-plugin-twin',
    // 'macros',
    // 'twin.macro',
  ],
};
