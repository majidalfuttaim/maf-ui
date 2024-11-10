---
meta:
  title: Mf Nav Actions
  description:
layout: component
---

```html:preview
<mf-actions>
  <mf-action-item href="/">Download Brochure</mf-action-item>
  <mf-action-item >
    <sl-icon slot="prefix" name="flag-fill"></sl-icon>
    AR
    <mf-actions slot="submenu">
      <mf-action-item >
        <sl-icon slot="prefix" name="flag-fill"></sl-icon>
        AR
      </mf-action-item>
      <mf-action-item >
        <sl-icon slot="prefix" name="flag-fill"></sl-icon>
        EN
      </mf-action-item>
    </mf-actions>
  </mf-action-item>
  <mf-action-item>
    <sl-icon slot="icon" name="person"></sl-icon>
  </mf-action-item>
</mf-actions>
```

## Examples

### Simple Actions

```html:preview
<div style="width: 260px;">
<mf-actions>
  <mf-action-item href="/">Download Brochure</mf-action-item>
  <mf-action-item>
    AR
  </mf-action-item>
</mf-actions>
</div>
```

### Second Example

```html:preview
<div style="width: 300px;">
<mf-actions>
  <mf-action-item >
    <sl-icon slot="prefix" name="flag-fill"></sl-icon>
    AR
    <mf-actions slot="submenu" style="width: 200px;">
      <mf-action-item >
        <sl-icon slot="prefix" name="flag-fill"></sl-icon>
        UAE
      </mf-action-item>
      <mf-action-item >
        <sl-icon slot="prefix" name="flag-fill"></sl-icon>
        KSA
      </mf-action-item>
      <sl-divider></sl-divider>
      <mf-action-item >
        AR
      </mf-action-item>
      <mf-action-item >
        EN
      </mf-action-item>
    </mf-actions>
  </mf-action-item>
  <mf-action-item hideChevron="true">
    <sl-icon slot="icon" name="person"></sl-icon>
      <mf-actions slot="submenu" style="width: 450px;height: 500px;align-items: center;">
        <mf-logo src="https://www.dev.mallgiftcard.ae/assets/maf-logo-header.svg" alt="MAF" ></mf-logo>
        <p style="max-width: 400px;text-wrap: auto;">
          LOG IN OR REGISTER NOW
          <br />
One account for all Majid Al Futtaim brands
<br />
Log in with your existing Majid Al Futtaim account or register now for a seamless experience and to redeem SHARE points.
</p>
        <sl-button variant="primary" >Login</sl-button>
        <sl-button variant="neutral">Registration</sl-button>
        <mf-logo src="https://api-prod.thatconceptstore.com/medias/maf-en.png?context=bWFzdGVyfGltYWdlc3w1OTcyfGltYWdlL3BuZ3xhR1EwTDJneE1pOHhNVFF3TlRVM05ERXhNVEkyTWk5dFlXWmZaVzR1Y0c1bnwyY2IzZmU0MmI1M2NkOTg3MmY1NjBhNTA5ODhlZjFkMTMxYjVmZmJiYmNjMjlhZmIxODI5MTU4YjQ1MzVkYjVj" alt="MAF" style="width: 100px;"></mf-logo>
      </mf-actions>
  </mf-action-item>
  <mf-action-item>
    <sl-icon slot="icon" name="heart"></sl-icon>
  </mf-action-item>
  <mf-action-item>
    <sl-icon slot="icon" name="bag"></sl-icon>
  </mf-action-item>
</mf-actions>
</div>
```

[component-metadata:mf-nav-actions]
