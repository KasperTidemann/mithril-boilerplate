// Routes:
session.ready(function() {
  m.route(document.body, '/', {
    '/': root,
    '/about': about,
    '/news': news
  })
});
