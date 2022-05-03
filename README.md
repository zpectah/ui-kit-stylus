# UI Toolkit Stylus

## Description
CSS utilities and helper classes based on STYLUS preprocessor.

!! Still in development, need to update structure, variables, etc !!


## Color palette
Key | RGB
--- | ---
default | `rgb(69,90,100)`
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


## Features
- base unit: `spacer = 1rem`

### Spacing {m,p}
#### Margin
- prop: [auto, initial, inherit, + (0..5)]
- {prefix}-{prop} ... `.m-0` => `{ margin: 0 !important }`
- {prefix}{direction}-{prop} ... `.mt-2` => `{ margin-top: 2rem !important }`
- {prefix}{direction}-{breakpoint}-{prop} ... `.mb-sm-2` => `@media screen and (min-width: 576px) { margin-bottom: 2rem !important }`
- {prefix}{direction}-n{prop} ... `.mb-n2` => `{ margin-bottom: -2rem !important }`
- {prefix}{direction}-{breakpoint}-n{prop} ... `.mr-sm-n3` => `@media screen and (min-width: 576px) { margin-right: -3rem !important }`
#### Padding
- prop: [initial, inherit, + (0..5)]
- {prefix}-{prop} ... `.p-0` => `{ padding: 0 !important }`
- {prefix}{direction}-{prop} ... `.pt-2` => `{ padding-top: 2rem !important }`
- {prefix}{direction}-{breakpoint}-{prop} ... `.pb-sm-2` => `@media screen and (min-width: 576px) { padding-bottom: 2rem !important }`


### Background {bg}
#### Background color
- prop: [none, initial, inherit, + palette]
- {prefix}-{prop} ... `.bg-success` => `{ background: rgb(56,142,60) !important }`
- {prefix}-{prop}-{opacity} ... `.bg-success-2` => `{ background:rgba(56,142,60,0.2) !important }`


### Typography {txt, ws, wb, ww}
#### Text color
- prop: [none, inherit, initial, + palette]
- {prefix}-{prop} ... `.txt-success` => `{ background: rgb(56,142,60) !important }`
- {prefix}-{prop}-{opacity} ... `.txt-error-5` => `{ color:rgba(211,47,47,0.5) !important }`
#### Text align {align}
- prop: [left, right, center, justify, initial, inherit]
- {prefix}-{suffix}-{prop} ... `.txt-align-justify` => `{ text-align: justify !important }`
- {prefix}-{suffix}-{breakpoint}-{prop} ... `.txt-align-sm-center` => `@media screen and (min-width: 576px) { text-align: center !important }`
#### Text decoration {deco}
- prop: [underline, overline, line-through, none, initial, inherit]
- {prefix}-{suffix}-{prop} ... `.txt-deco-underline` => `{ text-decoration: underline !important }`
#### Text justify {justify}
- prop: [auto, inter-word, inter-character, none, initial, inherit]
- {prefix}-{suffix}-{prop} ... `.txt-justify-none` => `{ text-justify: none !important }`
#### Text overflow {overflow}
- prop: [clip, ellipsis, initial, inherit]
- {prefix}-{suffix}-{prop} ... `.txt-overflow-clip` => `{ text-overflow: clip !important }`
#### Text transform
- prop: [none, capitalize, uppercase, lowercase, initial, inherit]
- {prefix}-{prop} ... `.txt-capitalize` => `{ text-transform: capitalize !important }`
#### White space {ws}
- prop: [normal, nowrap, pre, pre-line, pre-wrap, initial, inherit]
- {prefix}-{prop} ... `.ws-nowrap` => `{ white-space: nowrap !important }`
#### Word  break {wb}
- prop: [normal, break-all, keep-all, break-word, initial, inherit]
- {prefix}-{prop} ... `.wb-keep-all` => `{ word-break: keep-all !important }`
#### Word wrap {ww}
- prop: [normal, break-word, initial, inherit]
- {prefix}-{prop} ... `.ww-initial` => `{ word-wrap: initial !important }`


### Display {d}
- prop: [none, inline, inline-block, block, grid, table, table-cell, table-row, flex, inline-flex, hidden]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Print {print}
- {prefix}-print-{prop}
- {prefix}-print-{breakpoint}-{prop}


### Visibility {v}
- prop: [visible, hidden, collapse, initial, inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}


### Visually hidden {visually-hidden}
- {prefix}
- {prefix}-{breakpoint} 
- {prefix}-focusable
- {prefix}-focusable-{breakpoint}


### Opacity {opacity}
- prop: [0, 5, 10, 15, ... 100]
- {prefix}-{prop}


### Float {float}
- prop: [none|left|right|initial|inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}


### Sizing {w} {h} {vw} {vh}
#### Width
#### Height
#### Max width
#### Min width
#### Max height
#### Min height
- prop: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],[auto,initial,inherit],[initial,inherit],[none,initial,inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
- {prefix}-{min/max}-{prop}
- {prefix}-{min/max}-{breakpoint}-{prop}

### Flex
#### Direction {flex}
- prop: [row row-reverse column column-reverse initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop} 
#### Justify content {justify-content}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Justify items {justify-items}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Justify self {justify-self}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Align content {align-content}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Align items {align-items}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Align self {align-self}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Fill {fill}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}
- {prefix}-{breakpoint}
#### Grow {grow}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Shrink {shrink}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Wrap {wrap}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}
#### Order {order}
- prop: [flex-start flex-end center space-between space-around space-evenly initial inherit]
- {prefix}-{prop}
- {prefix}-{breakpoint}-{prop}

### Align
#### Vertical align {vertical-align}
- prop: [baseline sub super top text-top middle bottom text-bottom initial inherit]
- {prefix}-{prop}

## Helpers
### Clearfix
- todo
### Stacks
- todo
### Text truncate
- todo

