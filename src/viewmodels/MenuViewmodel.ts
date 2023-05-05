export default class MenuViewmodel {
  menus(path:any) {
    return [
      {name: 'Home', route: 'root', active: (path=='root'), submenus: []},
      
    ];
  }
}
