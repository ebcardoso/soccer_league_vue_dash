export default class MenuViewmodel {
  menus(path:any) {
    return [
      {name: 'Home', route: 'root', active: (path=='root'), submenus: []},
      {name: 'Users', route: '#', active: this.is_user_module(path), submenus: this.users_submenus(path)},
    ];
  }

  //Users
  is_user_module(path:any):boolean {
    const paths = ['usersIndexPath', 'usersCreatePath',];
    return paths.includes(path) ? true : false;
  }
  users_submenus(path:any) {
    return [
      {name: 'List Users', route:'usersIndexPath', active: (path=='usersIndexPath')},
      {name: 'Create User', route:'usersCreatePath', active: (path=='usersCreatePath')},
    ];
  }
}
