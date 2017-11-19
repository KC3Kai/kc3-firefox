import ThemeIllustrious from './themes/illustrious.scss'
import Logo from './assets/logo/128.png';

var headLogo = new Image()
headLogo.src = Logo
headLogo.className = 'logo'
document.querySelector('body').appendChild(headLogo)

let themeApplied = false
setInterval(() => {
  if (themeApplied) {
    ThemeIllustrious.unuse()
  } else {
    ThemeIllustrious.use()
  }
  themeApplied = !themeApplied
}, 2000)
