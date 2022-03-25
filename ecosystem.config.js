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
          key: '~/.ssh/deploy_keys/id_rsa',
        user: 'akuhn',
        host: ['217.160.249.136'],
        ref: 'origin/master',
        repo: 'git@ArthurKuhn-prog/rozieretgregore.com.git',
        ssh_options: [
            "StrictHostKeyChecking=no",
            "PasswordAuthentication=no"
        ],
        path: '/var/www/rozieretgregore.com',
      }
    }
  }