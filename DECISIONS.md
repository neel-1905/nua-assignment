# DECISIONS

## Architectural Decision

- One architectural decision I spent a lot of the time is whether the cart state should remain inside the `useCart` hook along with data from `localStorage`. But I realized soon that I will need reactive cart state outside the cart sidebar too.

### Choosing Context API

- So I decided to use `Context API` so that any component inside the `Provider` can use the reactive cart state. The entire logic of cart is present in the `useCart` hook, but the global state is present in the `CartContext`.

- If there was complete cart endpoints were provided by `FakeStore`, I would have preferred directly using the cart APIs instead of going for local state. However, I would still have to write the logic for managing stocks, quantities, colors, sizes, etc., anyway.

### Choosing Accordion over Tabs

- Another decision was choosing between tabs and an accordion for the product information section.

- I decided to go with the mobile-first approach and decided to use Accordions as they are better for a vertically scrolling application. Tabs work better when there is a lot of horizontal space

## What I Would Improve With More Time

- With more time, I would first like to change the use of `any` type to a more strict typing system. I would assign stricter types across all the hooks and components.

- I would also consider changing the way I am handling stocks and sizes. Currently stocks and sizes are tied each other while color selection is just visual and is intentionally kept simple which is not the case in real e-commerce.

- I also feel that there can be improvements in managing the CSS variables and classes to reduce redundancy.

- Also URL syncing can be improved with time and users can also share urls with active states for sharing the specifications descriptions directly for example.

- Accordion component can be made composable for better structure, separation of concerns and readability.

- The lighthouse performance can be improved by optimizing images, reducing bundle size, and improving loading times, but because of external image sources, it was difficult to optimize them. I would like to improve on that in the future to get a better score.

- SEO can be improved by adding OpenGraph images and meta tags for better sharing and search engine visibility.

- Currently I am using alerts to notify users of the actions, but a better notification system can be implemented using a toast library or custom toast components.
