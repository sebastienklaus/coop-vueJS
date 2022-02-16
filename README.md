# coop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Problèmes lors du développement

- Liste des messages : l'auteur du message renseigné est l'utilisateur connecté, et non l'auteur du message
- Lors du 1er refresh (F5), les données de l'utilisateur ne s'affichent pas (fullname par exemple)
- Lors du 2ème refresh, l'utilisateur est déconnecté (surement un problème du plugine VuexPersistence :/)
