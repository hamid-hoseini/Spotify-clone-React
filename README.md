# Spotify clone with REACT
  A copy of the Spotify app to learn and improve coding skills with the React framework.
  (Next.js, Tailwind CSS, NextAuth, Tokens, Debounce, Spotify API, oauth JWT, Access/Fresh, Recoil)
  
  Setting up Tailwind CSS in a Next.js v12 project:

  ```bash
  yarn create next-app --example with-tailwindcss <Project Name>
  
  # Run the application:
  npm run dev
  ```

## What I have learned in this project are:

  1. Authentication using Spotify APIs <sub>[Read More...](https://developer.spotify.com/)</sub>
  2. Recoil A state management library for React <sub>[Read More...](https://recoiljs.org/)</sub>
  3. Adding custom styles to Tailwind and using CSS and `@layer` <sub>[Read more...](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)</sub>
  4. Using `useCallback` hook. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. <sub>[Read more...](https://reactjs.org/docs/hooks-reference.html#usecallback)</sub>

## Dependencies
  - Tailwind @heroicons/react [link](https://github.com/tailwindlabs/heroicons)
  - Spotify Web API Node  [link](https://github.com/thelinmichael/spotify-web-api-node)
  - tailwind-scrollbar-hide [link](https://www.npmjs.com/package/tailwind-scrollbar-hide)
  - Lodash [link](https://lodash.com/)
  - Recoil [link](https://recoiljs.org/docs/introduction/getting-started)


## Note

> How to add a custom css into Tailwind and use it?
Instead of adding the same classes to multiple elements we can create a custom css and use it everwhere in our code

1- we need to create a `global.css`:
```tsx
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .button {
      @apply h-5 w-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out;
  }
}
```

2- then we can use the custome `button` class in elements like:
```tsx
<div>
  <SwitchHorizontalIcon className="button" />
</div>
```
3- we should import `global.css` into `_app.tsx` instead of `tailwindcss/tailwind.css`; 


#### DISCLAIMER: 

This code is developed for learning purposes only. Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” of this code for education purposes.