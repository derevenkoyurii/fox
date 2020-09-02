const packageJson = require('../../../../package.json');

export const environment = {
  appName: 'Angular Ngrx Material Starter',
  envName: 'PROD',
  production: true,
  i18nPrefix: '/angular-ngrx-material-starter',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  }
};
