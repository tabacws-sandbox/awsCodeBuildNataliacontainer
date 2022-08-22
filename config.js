module.exports = {
  /* endpoint: 'https://api.github.com/', */
  platform: 'github',
  logLevel: 'debug',
  onboardingConfig: {
    extends: ['config:base'],
  },
  repositories: ['tabacws-sandbox/awsCodeBuildNataliacontainer'],
  renovateFork: true,
  gitAuthor: "Ori Tabac <ori.tabac@whitesourcesoftware.com>",
  username: "tabac-ws",
  onboarding: false,
  printConfig: true,
  requireConfig: false,
};
