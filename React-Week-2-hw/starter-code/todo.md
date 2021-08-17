# React Router Exercise

We need a few steps

1. Install React router with npm
2. Use React router to show only one of Buzzwords, Nats, or Profile based on the current path
3. Add a nav to the header to move between the views
4. Style it! The new layout needs a few adjustments.
5. (HARDER) Parametrise the username for the profile as a link
   1. `/profile/robin` should show Robin's profile
   2. `/profile/tristan` should show Tristan's profile
   3. Make the `@{username}` into `Link` components with appropriate `to`. How does this simplify the code?
   4. Remove the Profile link in the `nav` — you don't need it now!
6. (HARDER) Add a "back" or "close" button to the Profile view which goes to the previous view 

The guide at [React Router Web: Quick Start](https://reactrouter.com/web/guides/quick-start) is a good place to start if you need a guide.

## Handy shortcuts

- [installation](https://reactrouter.com/web/guides/quick-start/installation)
- [`Link` documentation](https://reactrouter.com/web/api/Link)
- [`Route` documentation](https://reactrouter.com/web/api/Route)
- [`useParams` documentation](https://reactrouter.com/web/api/Hooks/useparams)
- [URL params example](https://reactrouter.com/web/example/url-params)
