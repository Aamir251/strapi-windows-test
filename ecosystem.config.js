module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm.cmd",
      args: "run start",
      interpreter: "none",
      cwd: "F:/my-strapi-project",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
