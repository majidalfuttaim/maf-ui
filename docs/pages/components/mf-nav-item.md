---
meta:
  title: Mf Nav Item
  description:
layout: component
---

```html:preview
<mf-navigation >
  <mf-nav-item>Option 1</mf-nav-item>
  <mf-nav-item highlight>Highlighted</mf-nav-item>
  <mf-nav-item disabled>Disabled</mf-nav-item>
  <mf-nav-item loading>Loading</mf-nav-item>
  <mf-nav-item>
    Prefix Icon
    <sl-icon slot="prefix" name="gift"></sl-icon>
  </mf-nav-item>
  <mf-nav-item>
    Suffix Icon
    <sl-icon slot="suffix" name="heart"></sl-icon>
  </mf-nav-item>
</mf-navigation>
```

{% raw %}

## Examples

### Prefix & Suffix

Add content to the start and end of nav items using the `prefix` and `suffix` slots.

```html:preview
<mf-navigation style="min-height: 200px;">
  <mf-nav-item>
    <sl-icon slot="prefix" name="house"></sl-icon>
    Home
  </mf-nav-item>

  <mf-nav-item>
    <sl-icon slot="prefix" name="envelope"></sl-icon>
    Messages
    <sl-badge slot="suffix" variant="primary" pill>12</sl-badge>
  </mf-nav-item>

  <mf-nav-item>
    <sl-icon slot="prefix" name="gear"></sl-icon>
    Settings
  </mf-nav-item>
</mf-navigation>
```

{% endraw %}

### Disabled

Add the `disabled` attribute to disable the nav item so it cannot be selected.

```html:preview
<mf-navigation style="min-height: 200px;">
  <mf-nav-item>Option 1</mf-nav-item>
  <mf-nav-item disabled>Option 2</mf-nav-item>
  <mf-nav-item>Option 3</mf-nav-item>
</mf-navigation>
```

### Loading

Use the `loading` attribute to indicate that a nav item is busy. Like a disabled nav item, clicks will be suppressed until the loading state is removed.

```html:preview
<mf-navigation style="min-height: 200px;">
  <mf-nav-item>Option 1</mf-nav-item>
  <mf-nav-item loading>Option 2</mf-nav-item>
  <mf-nav-item>Option 3</mf-nav-item>
</mf-navigation>
```

### Highlight

Use the `highlight` attribute to indicate that a nav item is highlighted with custom style.

```html:preview
<mf-navigation style="min-height: 200px;">
  <mf-nav-item>Option 1</mf-nav-item>
  <mf-nav-item highlight>Option 2</mf-nav-item>
  <mf-nav-item>Option 3</mf-nav-item>
</mf-navigation>
```

[component-metadata:mf-nav-item]
