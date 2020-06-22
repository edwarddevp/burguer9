const drawerButton = document.getElementById('drawer-button');
const menuDrawerOptions = document.getElementById('menu-drawer-options');
const linkButtonInicio = document.getElementById('menu-inicio')
const linkButtonOfrecemos = document.getElementById('menu-ofrecemos')
const linkButtonNoticias = document.getElementById('menu-noticias')
const linkButtonPlanes = document.getElementById('menu-combos')
const linkButtonNosotros = document.getElementById('menu-nosotros')
const linkButtonContactanos = document.getElementById('menu-contactanos')

const toggleDrawer = () =>  menuDrawerOptions.classList.toggle("display-none");


drawerButton.addEventListener('click',toggleDrawer);
linkButtonInicio.addEventListener('click',toggleDrawer);
linkButtonOfrecemos.addEventListener('click',toggleDrawer);
linkButtonNoticias.addEventListener('click',toggleDrawer);
linkButtonPlanes.addEventListener('click',toggleDrawer);
linkButtonNosotros.addEventListener('click',toggleDrawer);
linkButtonContactanos.addEventListener('click',toggleDrawer);
