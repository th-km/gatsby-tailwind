# Gatsby with Tailwind

## Quick start

1. Install dependencies
   `npm i tailwindcss autoprefixer gatsby-plugin-postcss gatsby-plugin-purgecss`
2. Create a tailwind config `npx tailwindcss init`
3. In `src` create a new folder/file `styles/tailwind.css`
4. Add the tailwind's base, components, and utilities styles
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. Create a `gatsby-browser.js` file and import `tailwind.css`
6. Edit your `gatsby-config.js`
   ```js
   module.exports = {
     plugins: [
       {
         resolve: "gatsby-plugin-postcss",
         options: {
           postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
         },
       },
       {
         resolve: "gatsby-plugin-purgecss",
         options: {
           printRejected: true,
           develop: false,
           tailwind: true,
         },
       },
     ],
   }
   ```
7. Run `gatsby develop`

## Examples

pages/index.js

```js
import React from "react"
import Button from "../components/button"

export default () => {
  return (
    <main className="container mx-auto">
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-3 gap-4">
          <Button>Click me</Button>
          <Button variant="primary">Click me</Button>
          <Button variant="secondary">Click me</Button>
        </div>
      </div>
    </main>
  )
}
```

components/button.js

```js
import React from "react"

const BASE =
  "px-3 py-2 text-base text-white bg-gray-500 rounded-md hover:bg-gray-600"

const VARIANTS = {
  primary: "bg-blue-500 hover:bg-blue-600",
  secondary: "bg-green-500 hover:bg-green-600",
}

const Button = ({ children, variant, className = "" }) => {
  const classNames = [className, BASE, VARIANTS[variant]].join(" ")

  return <button className={classNames}>{children}</button>
}

export default Button
```

## Alt version using @apply and plain CSS

**This solution can be found in the branch feature/apply**

components/button.js

```js
import React from "react"
import "./button.css"

const Button = ({ className = "", variant = "", children, ...props }) => {
  const variantName = variant && `btn--${variant}`

  return (
    <button {...props} className={`btn ${variantName} ${className}`}>
      {children}
    </button>
  )
}

export default Button
```

components/button.css

```css
.btn {
  @apply px-3 py-2 text-base text-white bg-gray-500 rounded-md;
}

.btn:hover {
  @apply bg-gray-600;
}

.btn--primary {
  @apply bg-blue-500;
}

.btn--primary:hover {
  @apply bg-blue-600;
}

.btn--secondary {
  @apply bg-green-500;
}

.btn--secondary:hover {
  @apply bg-green-600;
}
```

## Notes

If you are looking for a CSS-in-JS alternative, and find the solution too hacky you might want to have a look at this [example](https://github.com/th-km/twin) using twin.macro.
