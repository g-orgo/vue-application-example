<template>
  <div class="w-1/5 mx-auto mb-4 select-none flex flex-col items-center">
    <h1>OrgO</h1>
    <img src="../assets/logo.svg" alt="Vue logo" width="50%" draggable="false">
  </div>
  <div class="hover:bg-gray-100 duration-500 rounded-lg border border-gray-300 p-4 cursor-default select-none">
    <h3>Exercise 1: Product Catalog</h3>
    <p>Develop a product catalog using Vue.js.
      Create components for:</p>
    <ol class="list-decimal">
      <li>ProductList Component: Display a list of products with their names, prices, and a
        button to view details.</li>
      <li>ProductDetails Component: Show detailed information about a selected product,
        including its description, specifications, and price.</li>
    </ol>
    <h4>
      Implement routing using Vue Router:
    </h4>
    <ol class="list-decimal">
      <li>`/products` - Display the `ProductList` component.</li>
      <li>`/products/:id` - Show the `ProductDetails` component, where `:id` is the
        product ID.</li>
    </ol>
    <br>
    <h3>Exercise 2: User Registration Form</h3>
    <p>Build a user registration form using Vue.js. Create components for:</p>
    <ol class="list-decimal">
      <li>RegistrationForm Component: Design a form with fields for username, email,
        password, and a submit button.</li>
      <li>UserProfile Component: Once a user registers successfully, display their profile
        information with a welcome message.</li>
    </ol>
    <h4>
      Implement routing using Vue Router:
    </h4>
    <ol class="list-decimal">
      <li>`/register` - Display the `RegistrationForm` component.</li>
      <li>`/profile` - Show the `UserProfile` component after successful registration.</li>
    </ol>

  </div>
</template>
