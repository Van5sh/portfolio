# Design System: Luminescent Void

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Architect"**

This design system is a rejection of the "generic web." It is a high-end, editorial framework designed to showcase technical mastery through a lens of cinematic futurism. Instead of a standard grid of boxes, we treat the screen as a "void"—a deep, infinite space where content is illuminated by data-driven light.

The system breaks the "template" look through **intentional asymmetry** and **tonal depth**. We favor expansive negative space, allowing the vibrant primary cyan to act as a laser-focused guide for the user’s eye. Elements should feel less like UI components and more like light-emitting modules floating in a vacuum.

---

## 2. Colors & Atmospheric Surface
The palette is rooted in the "Void"—a hierarchy of near-blacks and charcoals that provide the canvas for electric accents.

### The Palette
- **Background (`#0e0e0f`):** The absolute base. Use this to create a sense of infinite depth.
- **Primary (`#8ff5ff` / `#00F0FF`):** Our "Luminescent" source. Use sparingly to draw attention to critical actions or data points.
- **Surface Tiers:** 
  - `surface_container_lowest` (#000000): Deepest recesses, used for inset areas.
  - `surface_container_low` (#131314): Standard sectioning.
  - `surface_container_highest` (#262627): Elevated interactive cards.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be defined solely through background shifts. To separate a section, move from `surface` to `surface_container_low`. This creates a sophisticated, "machined" look rather than a boxed-in layout.

### The "Glass & Gradient" Rule
To achieve the "High-End Developer" feel, utilize **Glassmorphism** for floating overlays (e.g., Modals or Navigation bars). 
- **Style:** Apply `surface_container_high` at 60% opacity with a `24px` backdrop-blur. 
- **Signature Gradients:** For CTAs, use a linear gradient from `primary` (#8ff5ff) to `primary_container` (#00eefc) at a 135-degree angle. This provides a "glow-wire" effect that flat color cannot replicate.

---

## 3. Typography: The Technical Edge
We pair the geometric precision of **Space Grotesk** with the humanist clarity of **Manrope**.

- **Display & Headlines (Space Grotesk):** These are your architectural anchors. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections. The tech-focused nature of Space Grotesk should feel like a command-line interface reimagined for a luxury brand.
- **Body & Titles (Manrope):** Manrope provides a sophisticated, readable contrast. Use `body-lg` for long-form content to ensure the technical aesthetic doesn't sacrifice legibility.
- **Labels (Space Grotesk):** Small caps or uppercase labels at `label-sm` should be used for metadata and technical specs, reinforcing the "developer tool" vibe.

---

## 4. Elevation & Depth
Depth in this system is a result of light and layering, not drop shadows.

### The Layering Principle
Stack surfaces to create hierarchy. 
*Example:* Place a `surface_container_highest` card on top of a `surface_container_low` section. The contrast in value creates a "lift" that feels organic to the obsidian environment.

### Ambient Shadows & Glows
Forget "Drop Shadows." Use **Ambient Glows**.
- When an element floats, use a shadow color derived from `primary` at 5% opacity with a massive `64px` blur. It shouldn't look like a shadow; it should look like the element is emitting a faint cyan light onto the surface beneath it.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**:
- Stroke: `outline_variant` (#484849)
- Opacity: 15%
- Result: A hair-line suggestion of an edge that disappears into the void.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `on_primary` text, `round-md` (0.375rem).
- **Secondary:** Ghost border (20% opacity) with `primary` text. No fill.
- **Interaction:** On hover, the primary button should gain a `12px` outer glow of `primary` color.

### Input Fields
- **Base:** `surface_container_low` background with a bottom-only "Ghost Border."
- **Focus State:** The bottom border transforms into a 2px `primary` solid line with a soft cyan under-glow.
- **Typography:** Labels use `label-md` in `on_surface_variant`.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines. 
- **Execution:** Separate list items using `12px` of vertical whitespace. For cards, use `surface_container_highest` with a `round-lg` (0.5rem) corner radius. Use a subtle `primary` glow on the top-left corner (1px stroke, 10% opacity) to simulate a "rim light."

### Data Visualization (Signature Component)
As a developer showcase, data is hero. Use `primary` for active data lines and `tertiary` (#65afff) for secondary metrics. Background grids should be `outline_variant` at 5% opacity—barely visible, like a radar screen.

---

## 6. Do’s and Don’ts

### Do:
- **Embrace Asymmetry:** Offset your headline from your body text. Use wide margins to let the "Void" breathe.
- **Use "Light Leaks":** Occasionally place a large, blurred `secondary_container` circle (10% opacity) in the far background to create atmospheric depth.
- **Prioritize Motion:** Elements should fade in with a slight "slide-up" (20px) to simulate a terminal loading sequence.

### Don’t:
- **Don't use pure white (#FFFFFF) for everything:** Use `on_surface_variant` (#adaaab) for secondary text to maintain the "Luminescent" contrast ratio.
- **Don't use Rounded Corners `full`:** This isn't a social app. Keep corners at `md` (0.375rem) or `lg` (0.5rem) to maintain a precise, engineered feel.
- **Don't use "Paper" metaphors:** This system is digital-native. Avoid any textures that look like physical materials (wood, grain, etc.) unless it is a digital "noise" grain.