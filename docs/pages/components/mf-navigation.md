---
meta:
  title: Mf Navigation
  description: simple navigation component for static websites
layout: component
---

You can use [Nav items](/components/mf-nav-item) to compose a navigation. Navigation support keyboard interactions, including type-to-select an option.

```html:preview
<mf-navigation>
  <mf-nav-item value="home">Home</mf-nav-item>
  <mf-nav-item value="contact">Contact Us</mf-nav-item>
  <mf-nav-item value="privacy">Privacy</mf-nav-item>
  <mf-nav-item value="products">Products</mf-nav-item>
</mf-navigation>
```

{% raw %}

```jsx:react
import MfNavigation from '@shoelace-style/shoelace/dist/react/MfNavigation';
import MfNavItem from '@shoelace-style/shoelace/dist/react/nav-item';

const App = () => (
  <MfNavigation style={{ maxWidth: '200px' }}>
    <MfNavItem value="undo">Undo</MfNavItem>
    <MfNavItem value="redo">Redo</MfNavItem>
    <MfNavItem value="cut">Cut</MfNavItem>
    <MfNavItem value="copy">Copy</MfNavItem>
    <MfNavItem value="paste">Paste</MfNavItem>
    <MfNavItem value="delete">Delete</MfNavItem>
  </MfNavigation>
);
```

{% endraw %}

## Examples

### SubNavigations

To create a subnav, nest an `<mf-navigation slot="subnav">` in any [nav item](/components/mf-nav-item).

```html:preview
<div style="min-height:250px;">
<mf-navigation >
  <mf-nav-item>
    Men
    <mf-navigation slot="subnav">
      <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
      <mf-nav-item value="new-in">New In</mf-nav-item>
      <mf-nav-item value="designer">Designers</mf-nav-item>
      <mf-nav-item value="clothing">clothing</mf-nav-item>
      <mf-nav-item value="shoes">Shoes</mf-nav-item>
    </mf-navigation>
  </mf-nav-item>

  <mf-nav-item>
    Women
    <mf-navigation slot="subnav">
      <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
      <mf-nav-item value="new-in">New In</mf-nav-item>
      <mf-nav-item value="designer">Designers</mf-nav-item>
      <mf-nav-item value="clothing">clothing</mf-nav-item>
      <mf-nav-item value="shoes">Shoes</mf-nav-item>
    </mf-navigation>
  </mf-nav-item>

  <mf-nav-item>
    Home & Gifts
    <mf-navigation slot="subnav">
      <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
      <mf-nav-item value="new-in">New In</mf-nav-item>
      <mf-nav-item value="designer">Designers</mf-nav-item>
      <mf-nav-item value="clothing">clothing</mf-nav-item>
      <mf-nav-item value="shoes">Shoes</mf-nav-item>
    </mf-navigation>
  </mf-nav-item>

</mf-navigation>
</div>
```

{% raw %}

```jsx:react
import SlDivider from '@shoelace-style/shoelace/dist/react/divider';
import MfNavigation from '@shoelace-style/shoelace/dist/react/MfNavigation';
import MfNavItem from '@shoelace-style/shoelace/dist/react/nav-item';

const App = () => (
  <MfNavigation style={{ maxWidth: '200px' }}>
    <MfNavItem value="undo">Undo</MfNavItem>
    <MfNavItem value="redo">Redo</MfNavItem>
    <SlDivider />
    <MfNavItem value="cut">Cut</MfNavItem>
    <MfNavItem value="copy">Copy</MfNavItem>
    <MfNavItem value="paste">Paste</MfNavItem>
    <SlDivider />
    <MfNavItem>
      Find
      <MfNavigation slot="subnav">
        <MfNavItem value="find">Find…</MfNavItem>
        <MfNavItem value="find-previous">Find Next</MfNavItem>
        <MfNavItem value="find-next">Find Previous</MfNavItem>
      </MfNavigation>
    </MfNavItem>
    <MfNavItem>
      Transformations
      <MfNavigation slot="subnav">
        <MfNavItem value="uppercase">Make uppercase</MfNavItem>
        <MfNavItem value="lowercase">Make lowercase</MfNavItem>
        <MfNavItem value="capitalize">Capitalize</MfNavItem>
      </MfNavigation>
    </MfNavItem>
  </MfNavigation>
);
```

:::warning
As a UX best practice, avoid using more than one level of subnavs when possible.
:::

{% endraw %}

### 3 level SubNavigation

To create a subnav, nest an `<mf-navigation slot="subnav">` in any [nav item](/components/mf-nav-item).

```html:preview
<div style="min-height:250px;">
<mf-navigation >
  <mf-nav-item>
    Men
    <mf-navigation slot="subnav">
      <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
      <mf-nav-item value="new-in">New In
        <mf-navigation slot="subnav">
          <mf-nav-item value="adidas">Adidas</mf-nav-item>
          <mf-nav-item value="nike">Nike</mf-nav-item>
          <mf-nav-item value="nb">NB</mf-nav-item>
          <mf-nav-item value="item">item</mf-nav-item>
          <mf-nav-item value="item">item</mf-nav-item>
        </mf-navigation>
      </mf-nav-item>
      <mf-nav-item value="designer">Designers</mf-nav-item>
      <mf-nav-item value="clothing">clothing</mf-nav-item>
      <mf-nav-item value="shoes">Shoes</mf-nav-item>
    </mf-navigation>
  </mf-nav-item>

  <mf-nav-item>
    Women
    <mf-navigation slot="subnav">
      <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
      <mf-nav-item value="new-in">New In</mf-nav-item>
      <mf-nav-item value="designer">Designers</mf-nav-item>
      <mf-nav-item value="clothing">clothing</mf-nav-item>
      <mf-nav-item value="shoes">Shoes</mf-nav-item>
    </mf-navigation>
  </mf-nav-item>

  <mf-nav-item>
    Home & Gifts
    <mf-navigation slot="subnav">
      <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
      <mf-nav-item value="new-in">New In</mf-nav-item>
      <mf-nav-item value="designer">Designers</mf-nav-item>
      <mf-nav-item value="clothing">clothing</mf-nav-item>
      <mf-nav-item value="shoes">Shoes</mf-nav-item>
    </mf-navigation>
  </mf-nav-item>

</mf-navigation>
</div>
```

{% raw %}

```jsx:react
import SlDivider from '@shoelace-style/shoelace/dist/react/divider';
import MfNavigation from '@shoelace-style/shoelace/dist/react/MfNavigation';
import MfNavItem from '@shoelace-style/shoelace/dist/react/nav-item';

const App = () => (
  <MfNavigation style={{ maxWidth: '200px' }}>
    <MfNavItem value="undo">Undo</MfNavItem>
    <MfNavItem value="redo">Redo</MfNavItem>
    <SlDivider />
    <MfNavItem value="cut">Cut</MfNavItem>
    <MfNavItem value="copy">Copy</MfNavItem>
    <MfNavItem value="paste">Paste</MfNavItem>
    <SlDivider />
    <MfNavItem>
      Find
      <MfNavigation slot="subnav">
        <MfNavItem value="find">Find…</MfNavItem>
        <MfNavItem value="find-previous">Find Next</MfNavItem>
        <MfNavItem value="find-next">Find Previous</MfNavItem>
      </MfNavigation>
    </MfNavItem>
    <MfNavItem>
      Transformations
      <MfNavigation slot="subnav">
        <MfNavItem value="uppercase">Make uppercase</MfNavItem>
        <MfNavItem value="lowercase">Make lowercase</MfNavItem>
        <MfNavItem value="capitalize">Capitalize</MfNavItem>
      </MfNavigation>
    </MfNavItem>
  </MfNavigation>
);
```

{% endraw %}

### Vertical Sub-Navigation

To create a subnav, nest an `<mf-navigation slot="subnav" vertical="true">` in any [nav item](/components/mf-nav-item).

```html:preview
<div style="min-height:200px;">
<mf-navigation >
  <mf-nav-item>
    Neighbourhoods
    <mf-navigation slot="subnav" vertical="true">
      <mf-nav-item value="find">Serra</mf-nav-item>
      <mf-nav-item value="find-previous">Cilia</mf-nav-item>
    </mf-navigation>
  </mf-nav-item>
  <mf-nav-item value="undo">Contact Us</mf-nav-item>
  <mf-nav-item value="redo">Download Brochure</mf-nav-item>
  <mf-nav-item>
    Language
    <mf-navigation slot="subnav" vertical="true">
      <mf-nav-item value="uppercase">AR</mf-nav-item>
      <mf-nav-item value="lowercase">EN</mf-nav-item>
    </mf-navigation>
  </mf-nav-item>
</mf-navigation>
</div>
```

{% raw %}

```jsx:react
import SlDivider from '@shoelace-style/shoelace/dist/react/divider';
import MfNavigation from '@shoelace-style/shoelace/dist/react/MfNavigation';
import MfNavItem from '@shoelace-style/shoelace/dist/react/nav-item';

const App = () => (
  <MfNavigation style={{ maxWidth: '200px' }}>
    <MfNavItem value="undo">Undo</MfNavItem>
    <MfNavItem value="redo">Redo</MfNavItem>
    <SlDivider />
    <MfNavItem value="cut">Cut</MfNavItem>
    <MfNavItem value="copy">Copy</MfNavItem>
    <MfNavItem value="paste">Paste</MfNavItem>
    <SlDivider />
    <MfNavItem>
      Find
      <MfNavigation slot="subnav">
        <MfNavItem value="find">Find…</MfNavItem>
        <MfNavItem value="find-previous">Find Next</MfNavItem>
        <MfNavItem value="find-next">Find Previous</MfNavItem>
      </MfNavigation>
    </MfNavItem>
    <MfNavItem>
      Transformations
      <MfNavigation slot="subnav">
        <MfNavItem value="uppercase">Make uppercase</MfNavItem>
        <MfNavItem value="lowercase">Make lowercase</MfNavItem>
        <MfNavItem value="capitalize">Capitalize</MfNavItem>
      </MfNavigation>
    </MfNavItem>
  </MfNavigation>
);
```

{% endraw %}

### Second Example

TODO

[component-metadata:mf-navigation]
