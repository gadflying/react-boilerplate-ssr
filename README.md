## react-boilerplate-ssr

This is a react ssr demo written by typescript. It base on react16.x and webpack4.x

Fetures:

1. Support HMR in development mode.
2. Code Splitting base on route.
3. Head management for SEO.
4. Fetch Data ahead of time.

## Available Scripts

### `npm install`

First, run the `npm install` to install dependence.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production.

### `npm run start`

Starts the server for production.

###git remote add

git remote add origin https://github.com/gadflying/react-boilerplate-ssr.git

git push --set-upstream origin master
error: src refspec master does not match any.
error: failed to push some refs to 'https://github.com/gadflying/react-boilerplate-ssr.git'


 could specify what branch you want to pull:

git pull origin master
Or you could set it up so that your local master branch tracks github master branch as an upstream:

git branch --set-upstream-to=origin/master master
git pull
This branch tracking is set up for you automatically when you clone a repository (for the default branch only), but if you add a remote to an existing repository you have to set up the tracking yourself. Thankfully, the advice given by git makes that pretty easy to remember how to do.

git pull origin master --allow-unrelated-histories


