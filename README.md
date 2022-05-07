# UI Toolkit Stylus v0.9.0

## Description
CSS utilities and helper classes based on STYLUS preprocessor. Similar to Bootstrap, but not too complex. It can be used 
with bundle or main stylus import to your project.

Some features/options may be changed during versions.

## Dependencies
- [Webpack](https://webpack.js.org/) (5.72.0)
- [Stylus](https://stylus-lang.com/) (0.57.0)
- [stylus-loader](https://webpack.js.org/loaders/stylus-loader/) (6.2.0)

## Basic features
- CSS utilities classes
- CSS helper classes
- CSS basic UI components
- JSON config file with deep customization

## Configurable variables
- Base unit: `spacer` => `1rem`
- Link color: `rgb(48,63,159)`
- Global prefixes
- Global suffixes

## Color palette
Key | RGB | Description
--- | --- | ---
default | `rgb(69,90,100)` | Is not used for object iteration
primary | `rgb(104,104,172)`
secondary | `rgb(98,93,96)`
success | `rgb(56,142,60)`
info | `rgb(2,136,209)`
warning | `rgb(245,124,0)`
error | `rgb(211,47,47)`
light | `rgb(250,250,250)`
dark | `rgb(41,40,45)`

## Breakpoints
Key | Min width | Max width
--- | --- | ---
xs | `0` | `575px`
sm | `576px` | `767px`
md | `768px` | `991px`
lg | `992px` | `1199px`
xl | `1200px` | `1399px`
xxl | `1400px` | `-`


## Utilities

### Vertical align
Name | Property | Class name | Values
--- | --- | --- | ---
Vertical align | vertical-align | `.vertical-align-{value}` | _baseline, sub, super, top, text-top, middle, bottom, text-bottom, inherit_

### Background
Name | Property | Class name | Values | Opacity
--- | --- | --- | --- | ---
Background color | background | `.bg-{value}` | _none, inherit_ |
Background color | background | `.bg-{value}` | [palette] |
Opacity background color | background | `.bg-{value}-{opacity}` | [palette] | 1..9 / 10

### Color
Name | Property | Class name | Values | Opacity
--- | --- | --- | --- | ---
Text color | color | `.color-{value}` | _inherit_ |
Text color | color | `.color-{value}` | [palette] |
Opacity text color | color | `.color-{value}-{opacity}` | [palette] | 1..9 / 10

### Display
Name | Property | Class name | Values
--- | --- | --- | ---
Display | display | `.d-{value}` | _inherit, none, inline, inline-block, block, grid, table, table-cell, table-row, flex, inline-flex_
Responsive display | display | `.d-{breakpoint}-{value}` | _inherit, none, inline, inline-block, block, grid, table, table-cell, table-row, flex, inline-flex_
Print display | display | `.d-print-{value}` | _inherit, none, inline, inline-block, block, grid, table, table-cell, table-row, flex, inline-flex_

### Flex
#### Flex
Name | Property | Class name | Values
--- | --- | --- | ---
Flex | flex | `.flex-{value}` | _auto, none, inherit, 1, 0_
Responsive flex | flex | `.flex-{breakpoint}-{value}` | _auto, none, inherit, 1, 0_

#### Direction
Name | Property | Class name | Values
--- | --- | --- | ---
Flex direction | flex-direction | `.flex-direction-{value}` | _row, row-reverse, column, column-reverse, inherit_
Responsive flex direction | flex-direction | `.flex-direction-{breakpoint}-{value}` | _row, row-reverse, column, column-reverse, inherit_

#### Justify content
Name | Property | Class name | Values
--- | --- | --- | ---
Flex justify content | justify-content | `.justify-content-{value}` | _flex-start, flex-end, center, space-between, space-around, space-evenly, inherit_
Responsive flex justify-content | justify-content | `.justify-content-{breakpoint}-{value}` | _flex-start, flex-end, center, space-between, space-around, space-evenly, inherit_

#### Justify items
Name | Property | Class name | Values
--- | --- | --- | ---
Flex justify items | justify-items | `.justify-items-{value}` | _flex-start, flex-end, center, inherit_
Responsive flex justify-items | justify-items | `.justify-items-{breakpoint}-{value}` | _flex-start, flex-end, center, inherit_

#### Justify self
Name | Property | Class name | Values
--- | --- | --- | ---
Flex justify self | justify-self | `.justify-self-{value}` | _auto, normal, stretch, center, flex-start, flex-end, self-start, self-end, left, right, baseline, inherit, revert, unset_
Responsive flex justify self | justify-self | `.justify-self-{breakpoint}-{value}` | _auto, normal, stretch, center, flex-start, flex-end, self-start, self-end, left, right, baseline, inherit, revert, unset_

#### Align content
Name | Property | Class name | Values
--- | --- | --- | ---
Flex align content | align-content | `.align-content-{value}` | _stretch, center, flex-start, flex-end, space-between, space-around, inherit_
Responsive flex align content | align-content | `.align-content-{breakpoint}-{value}` | _stretch, center, flex-start, flex-end, space-between, space-around, inherit_

#### Align items
Name | Property | Class name | Values
--- | --- | --- | ---
Flex align items | align-items | `.align-items-{value}` | _stretch, center, flex-start, flex-end, baseline, inherit_
Responsive flex align items | align-items | `.align-items-{breakpoint}-{value}` | _stretch, center, flex-start, flex-end, baseline, inherit_

#### Align self
Name | Property | Class name | Values
--- | --- | --- | ---
Flex align self | align-self | `.align-self-{value}` | _auto, stretch, center, flex-start, flex-end, baseline, inherit_
Responsive flex align-self | align-self | `.align-self-{breakpoint}-{value}` | _auto, stretch, center, flex-start, flex-end, baseline, inherit_

#### Fill
Name | Property | Class name | CSS Property
--- | --- | --- | ---
Flex fill | flex | `.flex-fill` | `flex: 1 1 auto`
Responsive flex fill | flex | `.flex-fill-{breakpoint}` | `flex: 1 1 auto`

#### Grow
Name | Property | Class name | Values
--- | --- | --- | ---
Flex grow | flex-grow | `.flex-grow-{value}` | _inherit, (0..5)_
Responsive flex grow | flex-grow | `.flex-grow-{breakpoint}-{value}` | _inherit, (0..5)_

#### Shrink
Name | Property | Class name | Values
--- | --- | --- | ---
Flex shrink | flex-shrink | `.flex-shrink-{value}` | _inherit, (0..5)_
Responsive flex shrink | flex-shrink | `.flex-shrink-{breakpoint}-{value}` | _inherit, (0..5)_

#### Wrap
Name | Property | Class name | Values
--- | --- | --- | ---
Flex wrap | flex-wrap | `.flex-wrap-{value}` | _nowrap, wrap, wrap-reverse, inherit_
Responsive flex wrap | flex-wrap | `.flex-wrap-{breakpoint}-{value}` | _nowrap, wrap, wrap-reverse, inherit_

#### Order
Name | Property | Class name | Values
--- | --- | --- | ---
Flex order | order | `.flex-order-{value}` | _first, last, (0..5)_
Responsive flex order | order | `.flex-order-{breakpoint}-{value}` | _first, last, (0..5)_

#### Gap
Name | Property | Class name | Values
--- | --- | --- | ---
Flex gap | gap | `.gap-{value}` | _0..5_
Responsive flex gap | gap | `.gap-{breakpoint}-{value}` | _0..5_

### Float
Name | Property | Class name | Values
--- | --- | --- | ---
Float | float | `.float-{value}` | _none, left, right, inherit_
Responsive float | float | `.float-{breakpoint}-{value}` | _none, left, right, inherit_

### Spacing
#### Margin
Name | Property | Class name | Values | Directions | Modulo
--- | --- | --- | --- | --- | ---
Margin | margin | `.m-{value}` | _auto, inherit, (0..5)_ | | 1
Margin directional | margin-{direction} | `.m{direction}-{value}` | _auto, inherit, (0..5)_ | _t, r, b, l, x, y_ | 1
Negative margin | margin | `.m-n{value}` | _1..5_ | |
Responsive margin | margin | `.m-{breakpoint}-{value}` | _auto, inherit, (0..5)_ | | 1
Responsive directional margin | margin-{direction} | `.m{direction}-{breakpoint}-{value}` | _auto, inherit, (0..5)_ | _t, r, b, l, x, y_ | 1
Responsive negative margin | margin | `.m-{breakpoint}-n{value}` | _1..5_ | |
Responsive directional negative margin | margin-{direction} | `.m{direction}-{breakpoint}-n{value}` | _1..5_ | _t, r, b, l, x, y_ |

#### Padding
Name | Property | Class name | Values | Directions | Modulo
--- | --- | --- | --- | --- | ---
Padding | padding | `.p-{value}` | _inherit, (0..5)_ | | 1
Padding directional | padding-{direction} | `.p{direction}-{value}` | _inherit, (0..5)_ | _t, r, b, l, x, y_ | 1
Responsive padding | padding | `.p-{breakpoint}-{value}` | _inherit, (0..5)_ | | 1
Responsive directional padding | padding-{direction} | `.p{direction}-{breakpoint}-{value}` | _inherit, (0..5)_ | _t, r, b, l, x, y_ | 1

### Sizing
#### Width
Name | Property | Class name | Values | Unit | Modulo
--- | --- | --- | --- | --- | ---
Width | width | `.w-{value}` | _auto, inherit, (0..100)_ | % | 5
Responsive width | width | `.w-{breakpoint}-{value}` | _auto, inherit, (0..100)_ | % | 5
Min width | min-width | `.w-min-{value}` | _inherit, (0..100)_ | % | 5
Responsive min width | min-width | `.w-min-{breakpoint}-{value}` | _inherit, (0..100)_ | % | 5
Max width | max-width | `.w-max-{value}` | _none inherit, (0..100)_ | % | 5
Responsive max width | max-width | `.w-max-{breakpoint}-{value}` | _none inherit, (0..100)_ | % | 5
Viewport width | width | `.vw-{value}` | _0..100_ | vw | 5
Responsive viewport width | width | `.vw-{breakpoint}-{value}` | _0..100_ | vw | 5
Min viewport width | min-width | `.vw-min-{value}` | _0..100_ | vw | 5
Responsive min viewport width | min-width | `.vw-min-{breakpoint}-{value}` | _0..100_ | vw | 5

#### Height
Name | Property | Class name | Values | Unit | Modulo
--- | --- | --- | --- | --- | ---
Height | height | `.h-{value}` | _auto, inherit, (0..100)_ | % | 5
Responsive height | height | `.h-{breakpoint}-{value}` | _auto, inherit, (0..100)_ | % | 5
Min height | min-height | `.h-min-{value}` | _inherit, (0..100)_ | % | 5
Responsive min height | min-height | `.h-min-{breakpoint}-{value}` | _inherit, (0..100)_ | % | 5
Max height | max-height | `.h-max-{value}` | _none, inherit, (0..100)_ | % | 5
Responsive max height | max-height | `.h-max-{breakpoint}-{value}` | _none, inherit, (0..100)_ | % | 5
Viewport height | height | `.vh-{value}` | _0..100_ | vh | 5
Responsive viewport height | height | `.vh-{breakpoint}-{value}` | _0..100_ | vh | 5
Min viewport height | min-height | `.vh-min-{value}` | _0..100_ | vh | 5
Responsive min viewport height | min-height | `.vh-min-{breakpoint}-{value}` | _0..100_ | vh | 5

### Opacity
Name | Property | Class name | Values | Modulo
--- | --- | --- | --- | ---
Opacity | opacity | `.opacity-{value}` | _inherit, (0..100) / 100_ | 5

### Text
#### Text align
Name | Property | Class name | Values
--- | --- | --- | ---
Text align | text-align | `.text-align-{value}` | _left, right, center, justify, inherit_
Responsive text align | text-align | `.text-align-{breakpoint}-{value}` | _left, right, center, justify, inherit_

#### Text decoration
Name | Property | Class name | Values
--- | --- | --- | ---
Text decoration | text-decoration | `.text-decoration-{value}` | _underline, overline, line-through, none, inherit_

#### Text justify
Name | Property | Class name | Values
--- | --- | --- | ---
Text justify | text-justify | `.text-justify-{value}` | _auto, inter-word, inter-character, none, inherit_

#### Text overflow
Name | Property | Class name | Values
--- | --- | --- | ---
Text overflow | text-overflow | `.text-overflow-{value}` | _clip, ellipsis, inherit_

#### Text transform
Name | Property | Class name | Values
--- | --- | --- | ---
Text transform | text-transform | `.text-transform-{value}` | _none, capitalize, uppercase, lowercase, inherit_

#### Text white space
Name | Property | Class name | Values
--- | --- | --- | ---
White space | white-space | `.white-space-{value}` | _normal, nowrap, pre, pre-line, pre-wrap, inherit_

#### Text word break
Name | Property | Class name | Values
--- | --- | --- | ---
Word break | word-break | `.word-break-{value}` | _normal, break-all, keep-all, break-word, inherit_

#### Text word wrap
Name | Property | Class name | Values
--- | --- | --- | ---
Word wrap | word-wrap | `.word-wrap-{value}` | _normal, break-word, inherit_

### Visibility
Name | Property | Class name | Values
--- | --- | --- | ---
Visibility | visibility | `.visibility-{value}` | _visible, hidden, collapse, inherit_


## Helpers

### Visually hidden
Hidden, but keep element on document

Class name | Description
--- | --- 
`.visually-hidden` | 
`.visually-hidden-focusable` |
`.visually-hidden-{breakpoint}` |
`.visually-hidden-focusable-{breakpoint}` |

### Clearfix
Clear float alignment for parent block

Class name | Description
--- | --- 
`.clearfix` |

### Stack
Flex horizontal or vertical layout wrapper with flex alignment options

Class name | Description
--- | --- 
`.stack-h` | Horizontal stack layout
`.stack-v` | Vertical stack layout

### Text
Text helper classes

Class name | Description
--- | --- 
`.text-truncate` | Truncate long text in one line and ended with dots


## UI

### Container
Class name | Description
--- | --- 
`.container` | Basic layout container, also contains responsive max width options
`.container-fluid` | Fluid layout container, means container is 100% width
`.container-xs` | Container with **XS** max width
`.container-sm` | Container with **SM** max width
`.container-md` | Container with **MD** max width
`.container-lg` | Container with **LG** max width
`.container-xl` | Container with **XL** max width
`.container-xxl` | Container with **XXL** max width

### Typography
Selector | Description
--- | --- 
`h1, .h1` | First level heading
`h2, .h2` | Second level heading
`h3, .h3` | Third level heading
`h4, .h4` | Fourth level heading
`h5, .h5` | Fifth level heading
`h6, .h6` | Sixth level heading
`p` | Paragraph
`p.lead` | Leading paragraph

### Button
Selector | Values | Element | Description
--- | --- | --- | ---
`.btn` | | _button, a_ | Base button class
`.btn.{value}` | _sm lg_ | _button, a_ | Button size variant
`.btn.{value}` | [palette] | _button, a_ | Button filled with palette color
`.btn.{value}-outline` | [palette] | _button, a_ | Button with palette color border

### Chip
Selector | Values | Element | Description
--- | --- | --- | ---
`.chip` | | _span, a_ | Base chip class
`.chip.{value}` | _sm lg_ | _span, a_ | Chip size variant
`.chip.{value}` | [palette] | _span, a_ | Chip filled with palette color
`.chip.{value}-outline` | [palette] | _span, a_ | Chip with palette color border

### Card
Selector | Description
--- | --- 
`.card` | Card wrapper
`.card-heading` | Card heading block
`.card-body` | Card main body content block
`.card-actions` | Card actions block

### Divider
Selector | Description
--- | --- 
`hr, .divider` | Divider line

### Form
Selector | Element | Description
--- | --- | ---
`.form-input` | _input_ | Form input element
`.form-select` | _select_ | Form select element
`.form-textarea` | _textarea_ | Form textarea element
`.form-range` | _input[type="range"]_ | Form input element
`.form-checkbox` | _input[type="checkbox"]_ | Form input element
`.form-radio` | _input[type="radio"]_ | Form input element
`.form-label` | _label_ | Form label element

### Menu
Selector | Element | Description
--- | --- | ---
`.menu` | _ul, ol_ | Menu element
`.menu-item` | _li_ | Menu item
`.menu-link` | _a_ | Menu item link






