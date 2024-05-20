import { defineMiddleware } from "astro:middleware";
import { lucia } from "./auth";

export const onRequest = defineMiddleware(async (context, next) => {
  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;

  if (sessionId) {
    const { session, user } = await lucia.validateSession(sessionId);
    context.locals.session = session;
    context.locals.user = user;
  }
  // const { pathname } = context.url;

  // if (isLoggedIn && (pathname === "/create" || pathname === "/login")) {
  //   return context.redirect("/");
  // }

  // if (
  //   !isLoggedIn &&
  //   pathname !== "/create" &&
  //   pathname !== "/login" &&
  //   context.request.method === "GET"
  // ) {
  //   return context.redirect("/login");
  // }

  return next();
});
