---
meta:
  title: Mf Action Item
  description:
layout: component
---

```html:preview
<mf-actions>
  <mf-action-item href="/">Option 1</mf-action-item>
  <mf-action-item disabled>Disabled</mf-action-item>
  <mf-action-item loading>Loading</mf-action-item>
  <mf-action-item>
    <sl-icon slot="icon" name="person"></sl-icon>
  </mf-action-item>
  <mf-action-item>
    Suffix Icon
    <sl-icon slot="suffix" name="heart"></sl-icon>
  </mf-action-item>
</mf-actions>
```

## Examples

### Language Selector

```html:preview
  <mf-action-item>
    <sl-icon slot="prefix" name="flag-fill"></sl-icon>
    AR
  </mf-action-item>
```

### Notification

```html:preview
  <mf-action-item style="width: 60px;">
    <sl-icon slot="prefix" name="bag"></sl-icon>

    <sl-badge slot="suffix" variant="primary" pill>
        12
      </sl-badge>
  </mf-action-item>
```

### Notification

```html:preview

```

[component-metadata:mf-action-item]
