module.exports = {
  language: 'en',
  sitename: 'KCF Academy | Kasparov Chess Foundation Academy',
  title: 'Kasparov Chess Foundation',
  description: `Kasparov Chess Foundation Academy`,
  baseurl: 'https://app.kcfacademy.org',
  logo: '/images/kcf-logo.png',
  image: 'https://app.kcfacademy.org/images/kcf-logo.png',
  googleFonts: 'https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap',
  fontAwesome: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
  bootstrap: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css',
  icons: [
    { icon: 'fab fa-facebook', href: 'https://www.facebook.com/ichessclub.ro' },
    { icon: 'fab fa-youtube', href: 'https://www.youtube.com/channel/UCSJILD26TcrMKGb7M3MEjZw' },
  ],
  pages: [
    { role: 'admin', title: 'Dashboard', href: '/admin' },
    { role: 'admin', title: 'Teachers', href: '/admin/teachers' },
    { role: 'admin', title: 'Members', href: '/admin/members' },
    { role: 'admin', title: 'Groups', href: '/admin/groups' },
    { role: 'admin', title: 'Lessons', href: '/admin/lessons' },
    { role: 'admin', title: 'Diagrams', href: '/admin/diagrams' },
    { role: 'admin', title: 'Quizzes', href: '/admin/quizzes' },
    { role: 'admin', title: 'Tags', href: '/admin/tags' },
    { role: 'admin', title: 'Live', href: '/admin/live' },
    { role: 'admin', title: 'Account', href: '/admin/settings' },
    { role: 'teacher', title: 'Dashboard', href: '/teacher' },
    { role: 'teacher', title: 'Members', href: '/teacher/members' },
    { role: 'teacher', title: 'Lessons', href: '/teacher/lessons' },
    { role: 'teacher', title: 'Diagrams', href: '/teacher/diagrams' },
    { role: 'teacher', title: 'Quizzes', href: '/teacher/quizzes' },
    { role: 'teacher', title: 'Tags', href: '/teacher/tags' },
    { role: 'teacher', title: 'Live', href: '/teacher/live' },
    { role: 'teacher', title: 'Account', href: '/teacher/settings' },
    { role: 'member', title: 'Dashboard', href: '/member' },
    { role: 'member', title: 'Lessons', href: '/member/lessons' },
    { role: 'member', title: 'Quizzes', href: '/member/quizzes' },
    { role: 'member', title: 'Live', href: '/member/live' },
    { role: 'member', title: 'Account', href: '/member/settings' },
  ],
  constants: {
    MAX_GAMES_PER_PGN_FILE: 100,
    DEFAULT_BOARD_WIDTH: '100%',
    MAX_BOARD_WIDTH: 600,
    ENGINE_FILEPATH: '/chess/engine/stockfish.asm.js',
  },
  groups: true,
};