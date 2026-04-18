# Design System Document: The Architectural Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

We are moving away from the "template-heavy" internet. This system is designed to feel like a high-end architectural monograph or a curated gallery space. It rejects the standard rigid grid in favor of **intentional asymmetry** and **tonal depth**. The goal is to create a sense of "quiet luxury"—where the space between elements (the "silence") is just as important as the content itself. 

By utilizing razor-sharp edges (0px border-radius) and a sophisticated serif-to-sans-serif contrast, we convey authority and timelessness. We do not use boxes to contain content; we use the canvas itself to frame it.

---

## 2. Colors
Our palette is rooted in an "off-white and obsidian" foundation, punctuated by a signature metallic accent (`primary: #775a19`).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be defined solely through background color shifts. 
- A hero section using `surface` transitions into a portfolio grid using `surface-container-low`. 
- Content blocks are separated by generous vertical whitespace, never by horizontal rules.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use tonal nesting to define importance:
- **Base Layer:** `background` (#fcf9f8) or `surface`.
- **Secondary Content:** `surface-container-low` (#f6f3f2).
- **Floating/Elevated Elements:** `surface-container-lowest` (#ffffff) to create a subtle "pop" against the off-white base.

### Signature Textures & Glass
To avoid a flat, "Bootstrap" feel:
- **The Glass Rule:** Use Glassmorphism for navigation bars and floating overlays. Apply `surface` at 80% opacity with a `20px` backdrop-blur. This allows the high-contrast typography to "float" over the content.
- **CTA Depth:** Main action buttons should use a subtle linear gradient from `primary` (#775a19) to `primary_container` (#c5a059) at a 135-degree angle to provide a metallic, tactile sheen.

---

## 3. Typography
The typographic system relies on the tension between the classicist `newsreader` serif and the modernist `manrope` sans-serif.

- **Display & Headlines (Newsreader):** Used for storytelling and large-scale impact. The high contrast of the serif strokes evokes a premium editorial feel. Use `display-lg` for hero statements with tight letter-spacing (-0.02em).
- **Body & Titles (Manrope):** Used for functional information and legibility. `body-lg` is your workhorse for descriptions.
- **Micro-Copy (Manrope):** `label-md` and `label-sm` should always be set in uppercase with increased letter-spacing (+0.1em) to act as "architectural labels" on the page.

---

## 4. Elevation & Depth
In a system with `0px` border-radius, traditional shadows can look messy. We use **Tonal Layering**.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The slight shift in hex value creates a "soft lift" that feels architectural rather than digital.
- **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use a "whisper shadow": 
  - `box-shadow: 0 20px 40px rgba(28, 27, 27, 0.04);`
  - This mimics natural gallery lighting.
- **The "Ghost Border" Fallback:** If a divider is functionally required (e.g., in a dense data table), use the `outline_variant` token at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons
- **Primary:** Rectangle (0px radius), `primary` background, `on_primary` text. On hover, transition to `primary_container`.
- **Secondary:** Transparent background, `primary` text, and a `1px` "Ghost Border" (15% opacity `outline`).
- **Tertiary/Action:** Text only, `primary` color, with a subtle 1px underline that expands from center on hover.

### Cards & Lists
- **Rule:** Forbid the use of divider lines.
- **Implementation:** Separate list items using `32px` of vertical whitespace. For portfolio cards, use an image-first approach where the text (using `title-md`) sits flush-left beneath the image, utilizing the `surface-container` tiers to create a subtle frame.

### Input Fields
- **Style:** Bottom-border only (using `outline_variant`). 
- **Focus State:** The bottom border transforms into the `primary` gold accent. 
- **Labels:** Use `label-sm` in uppercase, positioned 8px above the input.

### Navigation (The Gallery Header)
- A fixed top bar using the **Glassmorphism Rule**. 
- Links use `label-md`, uppercase. The active state is indicated by a small `4px` dot in `primary` gold beneath the text, rather than a bold font weight.

---

## 6. Do’s and Don’ts

### Do:
- **Embrace Asymmetry:** Align text to the left while keeping a large image offset to the right. 
- **Use High-Scale Contrast:** Pair a massive `display-lg` headline with a tiny, spaced-out `label-sm`.
- **Micro-interactions:** Use "Lazy" eases (e.g., `cubic-bezier(0.2, 0, 0, 1)`) for all transitions. Elements should feel like they have physical weight.

### Don’t:
- **No Rounded Corners:** Do not use `border-radius`. Everything is a sharp, confident 0px.
- **No Heavy Shadows:** Avoid the "Material Design" floating action button look. We want depth, not "stickers."
- **No Pure Blacks for Text:** Use `on_surface` (#1c1b1b) for body text to maintain a sophisticated, ink-on-paper look. Pure #000000 is too harsh for this system.
- **No Standard Grids:** Avoid the "3-column card row" whenever possible. Try a 2-column layout where one column is intentionally offset.

---

## 7. Signature Interaction: The "Curated Reveal"
When a user scrolls, elements should not just "fade in." They should slide up by `20px` while fading in, with a slight delay between the headline and the body text. This creates the feeling of a gallery being staged specifically for the viewer.