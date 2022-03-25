module.exports = {
    apps : [
      {
        name: 'rozier_et_gregore',
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ],
    deploy : {
      // "production" is the environment name
      production : {
        user: 'akuhn',
        host: ['217.160.249.136'],
        ref: 'origin/master',
        repo: 'git@ArthurKuhn-prog/rozieretgregore.com',
        ssh_options: ['ForwardAgent=yes'],
        path: '/var/www/rozieretgregore.com',
        'post-deploy' : 'yarn && yarn build && pm2 startOrRestart ecosystem.config.js --env production'
      }
    }
  }