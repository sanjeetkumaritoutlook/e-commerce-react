## Where did Mark Zuckerberg deploy Facebook in 2004–2005?

Back then, cloud services like AWS, Vercel, Netlify, or Render did not exist.

Developers had to rent physical servers (called dedicated hosting) or use colocation centers (where you rent rack space in a datacenter).

In Facebook’s early days (2004), Mark hosted thefacebook.com on Harvard’s dorm servers first.

Very quickly, it was moved to dedicated servers from a hosting provider (some early reports mention they used a company like ThePlanet or similar datacenter providers).

They physically had to buy servers, install Linux + Apache + MySQL + PHP (the famous LAMP stack), and rack them in a datacenter.

So, instead of today’s one-click deploy to AWS/Netlify, it was bare-metal servers, sysadmin work, and lots of manual setup.

## 💻 Was Facebook first written in PHP?

✅ Yes.

The very first version of Facebook (2004) was written in PHP.

Database: MySQL

Server: Apache

This was the classic LAMP stack.

Later, as Facebook scaled, PHP became too slow, so they built a custom compiler called HipHop for PHP (HPHPc), which converted PHP into optimized C++ for performance.

Eventually, they built Hack, a programming language based on PHP but faster and with static typing.

## 🔑 Summary

Deployment (2004–2005): Dedicated servers in datacenters (not cloud).

Stack: PHP + MySQL + Apache (LAMP).

Evolution: PHP → HipHop PHP → Hack (Facebook’s own language).

## Frontend (UI in the browser):
✅ React — Facebook created React in 2013, and now the Facebook web app’s frontend is built with React.

Example: the News Feed, Messenger UI, buttons, navigation — all React components.

React runs in the browser (JavaScript), not on the server.

## Backend (server-side):
❌ Not React. Facebook’s backend is still powered by:

Hack (a PHP derivative) for server logic

C++ and Java for performance-heavy systems

Erlang for chat/messaging systems

Python, Rust, Go in some specialized services

Huge MySQL + TAO (their own graph DB layer) for data.

Infrastructure:

They don’t use AWS/Render — Facebook runs on its own datacenters worldwide.

They even design their own servers, switches, and hardware (via the Open Compute Project).

## 🔑 So:

React = frontend framework (UI in browser)

Hack/PHP + other languages = backend (server-side logic, APIs)

Facebook is not “written in React”, but React is used for the user-facing web app.

First GitHub code was pushed into their own self-hosted Git server, running on rented/owned infrastructure.

They used Git as the version control system (created 3 years earlier in 2005).