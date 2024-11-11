---
meta:
  title: Mf Header
  description:
layout: component
---

```html:preview
<mf-header>

  <mf-logo src="https://www.dev.mallgiftcard.ae/assets/maf-logo-header.svg" alt="MAF" ></mf-logo>

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
</mf-header>
```

## Examples

### First Example

```html:preview
  <mf-header style="max-width: 1200px;margin: 0 auto;">
    <mf-logo src="https://www.dev.mallgiftcard.ae/assets/maf-logo-header.svg" alt="MAF"></mf-logo>
    <mf-navigation>
        <mf-nav-item>
            Neighbourhoods
            <mf-navigation slot="subnav" vertical="true">
                <mf-nav-item value="find">Serra</mf-nav-item>
                <mf-nav-item value="find-previous">Cilia</mf-nav-item>
            </mf-navigation>
        </mf-nav-item>
        <mf-nav-item value="undo">Contact Us</mf-nav-item>
        <mf-nav-item value="redo">Download Brochure</mf-nav-item>
        <mf-nav-item hideChevron="true">
            Language
            <mf-navigation slot="subnav" vertical="true">
                <mf-nav-item value="uppercase">AR</mf-nav-item>
                <mf-nav-item value="lowercase">EN</mf-nav-item>
            </mf-navigation>
        </mf-nav-item>
    </mf-navigation>
</mf-header>
```

### Second Example

```html:preview
  <mf-header style="max-width: 1400px;margin: 0 auto;background-color: rgba(0, 0, 0, 1);">
    <mf-logo
        src="https://www.malloftheemirates.com/images/default-source/default-album/navigation-_desktop_-_1_.webp?sfvrsn=c2c2c500_2"
        alt="MAF" style="width: 100px;"></mf-logo>
    <mf-actions>
        <mf-action-item>
            <sl-icon slot="prefix" name="flag-fill"></sl-icon>
            AR
            <mf-actions slot="submenu" style="width: 200px;">
                <mf-action-item>
                    <sl-icon slot="prefix" name="flag-fill"></sl-icon>
                    UAE
                </mf-action-item>
                <mf-action-item>
                    <sl-icon slot="prefix" name="flag-fill"></sl-icon>
                    KSA
                </mf-action-item>
                <sl-divider></sl-divider>
                <mf-action-item>
                    AR
                </mf-action-item>
                <mf-action-item>
                    EN
                </mf-action-item>
            </mf-actions>
        </mf-action-item>
        <mf-action-item hideChevron="true">
            <sl-icon slot="icon" name="person"></sl-icon>
            <mf-actions slot="submenu" style="width: 450px;height: 500px;align-items: center;">
                <mf-logo src="https://www.dev.mallgiftcard.ae/assets/maf-logo-header.svg"
                    alt="MAF"></mf-logo>
                <p style="max-width: 400px;text-wrap: auto;">
                    LOG IN OR REGISTER NOW
                    <br />
                    One account for all Majid Al Futtaim brands
                    <br />
                    Log in with your existing Majid Al Futtaim account or register now for a seamless
                    experience and to redeem SHARE points.
                </p>
                <sl-button variant="primary">Login</sl-button>
                <sl-button variant="neutral">Registration</sl-button>
                <mf-logo
                    src="https://api-prod.thatconceptstore.com/medias/maf-en.png?context=bWFzdGVyfGltYWdlc3w1OTcyfGltYWdlL3BuZ3xhR1EwTDJneE1pOHhNVFF3TlRVM05ERXhNVEkyTWk5dFlXWmZaVzR1Y0c1bnwyY2IzZmU0MmI1M2NkOTg3MmY1NjBhNTA5ODhlZjFkMTMxYjVmZmJiYmNjMjlhZmIxODI5MTU4YjQ1MzVkYjVj"
                    alt="MAF" style="width: 100px;"></mf-logo>
            </mf-actions>
        </mf-action-item>
        <mf-action-item>
            <sl-icon slot="icon" name="heart"></sl-icon>
        </mf-action-item>
        <mf-action-item>
            <sl-icon slot="icon" name="bag"></sl-icon>
        </mf-action-item>
    </mf-actions>
    <mf-navigation style="width: 100%;flex-basis: 100%;">
        <mf-nav-item wide highlight>
            Men
            <mf-navigation slot="subnav" wide>
                <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
                <mf-nav-item value="new-in" wide>New In
                    <mf-navigation slot="subnav" wide>
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

        <mf-nav-item wide>
            Women
            <mf-navigation slot="subnav" wide>
                <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
                <mf-nav-item value="new-in">New In</mf-nav-item>
                <mf-nav-item value="designer">Designers</mf-nav-item>
                <mf-nav-item value="clothing">clothing</mf-nav-item>
                <mf-nav-item value="shoes">Shoes</mf-nav-item>
            </mf-navigation>
        </mf-nav-item>

        <mf-nav-item wide>
            Home & Gifts
            <mf-navigation slot="subnav" wide>
                <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
                <mf-nav-item value="new-in">New In</mf-nav-item>
                <mf-nav-item value="designer">Designers</mf-nav-item>
                <mf-nav-item value="clothing">clothing</mf-nav-item>
                <mf-nav-item value="shoes">Shoes</mf-nav-item>
            </mf-navigation>
        </mf-nav-item>
    </mf-navigation>
</mf-header>
```

### Third Example

```html:preview
<mf-header style="max-width: 1400px;margin: 0 auto;">
      <mf-navigation>
          <mf-nav-item wide>
              Men
              <mf-navigation slot="subnav" wide>
                  <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
                  <mf-nav-item value="new-in" wide>New In
                      <mf-navigation slot="subnav" wide>
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

          <mf-nav-item wide>
              Women
              <mf-navigation slot="subnav" wide>
                  <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
                  <mf-nav-item value="new-in">New In</mf-nav-item>
                  <mf-nav-item value="designer">Designers</mf-nav-item>
                  <mf-nav-item value="clothing">clothing</mf-nav-item>
                  <mf-nav-item value="shoes">Shoes</mf-nav-item>
              </mf-navigation>
          </mf-nav-item>

          <mf-nav-item wide>
              Home & Gifts
              <mf-navigation slot="subnav" wide>
                  <mf-nav-item value="sale" highlight>Sale</mf-nav-item>
                  <mf-nav-item value="new-in">New In</mf-nav-item>
                  <mf-nav-item value="designer">Designers</mf-nav-item>
                  <mf-nav-item value="clothing">clothing</mf-nav-item>
                  <mf-nav-item value="shoes">Shoes</mf-nav-item>
              </mf-navigation>
          </mf-nav-item>

      </mf-navigation>

      <mf-logo
          src="https://api-prod.thatconceptstore.com/medias/THATlogo.svg?context=bWFzdGVyfGltYWdlc3wxOTA1fGltYWdlL3N2Zyt4bWx8YURBNEwyZ3pPQzg1TkRNNE5EUTVNak00TURRMkwxUklRVlJzYjJkdkxuTjJad3xkMjhkOGMyODljNjEyMzlhODBkZDQzMGM0NDdiNzEzODljNjU0NWU1MmJlZDk3MjVkYTA5Y2Y1NDBiZGU1MzJi"
          alt="MAF"></mf-logo>


      <mf-actions>
          <mf-action-item>
              <sl-icon slot="prefix" name="flag-fill"></sl-icon>
              AR
              <mf-actions slot="submenu" style="width: 200px;">
                  <mf-action-item>
                      <sl-icon slot="prefix" name="flag-fill"></sl-icon>
                      UAE
                  </mf-action-item>
                  <mf-action-item>
                      <sl-icon slot="prefix" name="flag-fill"></sl-icon>
                      KSA
                  </mf-action-item>
                  <sl-divider></sl-divider>
                  <mf-action-item>
                      AR
                  </mf-action-item>
                  <mf-action-item>
                      EN
                  </mf-action-item>
              </mf-actions>
          </mf-action-item>
          <mf-action-item hideChevron="true">
              <sl-icon slot="icon" name="person"></sl-icon>
              <mf-actions slot="submenu" style="width: 450px;height: 500px;align-items: center;">
                  <mf-logo src="https://www.dev.mallgiftcard.ae/assets/maf-logo-header.svg"
                      alt="MAF"></mf-logo>
                  <p style="max-width: 400px;text-wrap: auto;">
                      LOG IN OR REGISTER NOW
                      <br />
                      One account for all Majid Al Futtaim brands
                      <br />
                      Log in with your existing Majid Al Futtaim account or register now for a seamless
                      experience and to redeem SHARE points.
                  </p>
                  <sl-button variant="primary">Login</sl-button>
                  <sl-button variant="neutral">Registration</sl-button>
                  <mf-logo
                      src="https://api-prod.thatconceptstore.com/medias/maf-en.png?context=bWFzdGVyfGltYWdlc3w1OTcyfGltYWdlL3BuZ3xhR1EwTDJneE1pOHhNVFF3TlRVM05ERXhNVEkyTWk5dFlXWmZaVzR1Y0c1bnwyY2IzZmU0MmI1M2NkOTg3MmY1NjBhNTA5ODhlZjFkMTMxYjVmZmJiYmNjMjlhZmIxODI5MTU4YjQ1MzVkYjVj"
                      alt="MAF" style="width: 100px;"></mf-logo>
              </mf-actions>
          </mf-action-item>
          <mf-action-item>
              <sl-icon slot="icon" name="heart"></sl-icon>
          </mf-action-item>
          <mf-action-item>
              <sl-icon slot="icon" name="bag"></sl-icon>
          </mf-action-item>
      </mf-actions>
  </mf-header>
```

TODO

[component-metadata:mf-header]
