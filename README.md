# Thunder Fitness

## Introduction
Thunder Fitness is a eCommerce site where various kind of GYM items. Anyone can preview the products, filter by category or price. After that order can be placed. For the time being, anyone can manage product like add, edit, or delete.
###### Live Site: [thunder-fitness-client](https://thunder-fitness-client.vercel.app)

## Project Description
This eCommerce site has various features, means functionalities. In the Home page, product category and featured products have been showed as well as after clicking on each item will redirect to respective page. Also in the product page, product can be searched or filtered by price, multiple category whereas in the product details page, along with product info related category products are displayed and even product can be added to the cart from here. Product quantity can be changed but not over available stock and then checkout for placing order in the cart page. Here only implemented "Cash on Delivery" process for our local client, other payment method will be introduce as requirement. The main Goal of the project is to introduce a eCommerce site management system by implementing different technologies for making user experience smooth and attractive.

## Features
- Product can be added, modified and deleted.
- To display product, can be searched, sorted by price and filtered by min-max price or multiple categories.
- To order a product, can be added to the cart first then placed through the checkout page after providing some user info.
- Featured products are displayed to the home page which is controlled by toggling button in the product management page.

## Technology Stack
- Frontend: React, Redux, TailwindCSS, Shadcn, Typescript etc.
- Backend: Node.js, Express.js, Typescript, MongoDB, Mongoose etc.

## Installation Guideline
- First install the React App with Vite and select Typescript there.
- Install Redux, TailwindCSS, Shadcn, React-router and other required npm packages.
- Run the App by `npm run dev`
- Create require pages and connect them with the Router to navigate.
- Implement Redux Store and RTK Query.

### Prerequisites
- Must have a backend for managing the App data dynamically through API.

### Installation Steps
1. Create React app with Vite by `npm create vite@latest`.
2. Install the required npm package where TailwindCSS & Shadcn for managing CSS, Redux for state management, React-router for routing and there are also others for carousel slider, toast, animation.
3. Under the src folder there are some folder for specific purpose like assets, components, config, hooks, pages, redux, routes, types, styles and utils.
4. Implement Redux Store & RTK Query for managing local state and API by following [Redux-toolkit Doc](https://redux-toolkit.js.org/tutorials/quick-start)

### Configuration
1. Create a `.env.local` file in the root directory of the project.
2. Add necessary configuration variables in the `.env.local` file.
   Example:
   ```bash
    VITE_API_URL=local_or_live_server
    VITE_Api_Key_Imagbb=Api_key_for_Imagbb
   ```
3. Then the `.env.local` file needs to be connected with the `config`.
   ```js
    export const ApiUrl = import.meta.env.VITE_API_URL
    export const Api_Key_Imagbb = import.meta.env.VITE_Api_Key_Imagbb
   ```

## Usage
1. Product Management:
- The category will be empty, so need to create some category with image first. But Category can't be deleted or modified after creating one. So it's needed to be noted carefully.
- Then create product by using category. Product can be deleted or modified if needed.
2. Now it can be possible to view product details or place order with any of these. But there is a restriction on quantity which can't be over available stock.