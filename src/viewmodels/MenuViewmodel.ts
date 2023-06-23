export default class MenuViewmodel {
  menus(path:any) {
    return [
      {name: 'Home', route: 'root', active: (path=='root'), submenus: []},
      {name: 'Competitions', route: '#', active: this.is_competitions_module(path), submenus: this.competitions_submenus(path)},
      {name: 'Teams', route: '#', active: this.is_team_module(path), submenus: this.teams_submenus(path)},
      {name: 'Users', route: '#', active: this.is_user_module(path), submenus: this.users_submenus(path)},
    ];
  }

  //Competitions
  is_competitions_module(path:any):boolean {
    const paths = ['competitionsIndexPath'];
    return paths.includes(path) ? true : false;
  }
  competitions_submenus(path:any) {
    return [
      {name: 'List Competitions', route:'competitionsIndexPath', active: (path=='competitionsIndexPath')},
    ];
  }

  //Teams
  is_team_module(path:any):boolean {
    const paths = ['teamsIndexPath', 'teamsCreatePath'];
    return paths.includes(path) ? true : false;
  }
  teams_submenus(path:any) {
    return [
      {name: 'List Teams', route:'teamsIndexPath', active: (path=='teamsIndexPath')},
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
