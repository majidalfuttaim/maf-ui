---
meta:
  title: Mf Header
  description:
layout: component
---

```html:preview
<mf-header template="basic">

  <mf-img slot="logo" src="https://www.dev.mallgiftcard.ae/assets/maf-logo-header.svg" alt="MAF"></mf-img>

  <mf-navigation slot="navigation">
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

### Basic Example

```html:preview
  <mf-header style="max-width: 1200px;margin: 0 auto;" template="basic">
    <mf-img slot="logo" src="https://www.dev.mallgiftcard.ae/assets/maf-logo-header.svg" alt="MAF"></mf-img>
    <mf-navigation slot="navigation">
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

{% raw %}

```jsx:react
import MfHeader from '@maf-ui/maf-ui/dist/react/mf-header';
import MfImg from '@maf-ui/maf-ui/dist/react/mf-img';
import MfNavigation from '@maf-ui/maf-ui/dist/react/mf-navigation';
import MfNavItem from '@maf-ui/maf-ui/dist/react/mf-nav-item';

const App = () => (
  <MfHeader style={{maxWidth: "1200px",margin: "0 auto"}} template="basic">
    <MfImg slot="logo" src="https://www.dev.mallgiftcard.ae/assets/maf-logo-header.svg" alt="MAF"></MfImg>
    <MfNavigation slot="navigation">
        <MfNavItem>
            Neighbourhoods
            <MfNavigation slot="subnav" vertical="true">
                <MfNavItem value="find">Serra</MfNavItem>
                <MfNavItem value="find-previous">Cilia</MfNavItem>
            </MfNavigation>
        </MfNavItem>
        <MfNavItem value="undo">Contact Us</MfNavItem>
        <MfNavItem value="redo">Download Brochure</MfNavItem>
        <MfNavItem hideChevron="true">
            Language
            <MfNavigation slot="subnav" vertical="true">
                <MfNavItem value="uppercase">AR</MfNavItem>
                <MfNavItem value="lowercase">EN</MfNavItem>
            </MfNavigation>
        </MfNavItem>
    </MfNavigation>
</MfHeader>
);
```

{% endraw %}

### Single Row Example

```html:preview
  <mf-header template="singleRow" style="max-width: 1400px;margin: 0 auto;background-color: rgba(0, 0, 0, 1);">
    <mf-img slot="logo"
        src="https://www.malloftheemirates.com/images/default-source/default-album/navigation-_desktop_-_1_.webp?sfvrsn=c2c2c500_2"
        alt="MAF" width="150px"></mf-img>
    <mf-navigation slot="navigation">
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

    <sl-dropdown slot="actions">
        <sl-icon-button name="person-circle" label="auth" slot="trigger" style="font-size: 2.5rem;"></sl-icon-button>
  <sl-menu>
    <sl-menu-item value="login">Login</sl-menu-item>
    <sl-menu-item value="register">Register</sl-menu-item>
    <sl-menu-item value="logout">Logout</sl-menu-item>
  </sl-menu>
</sl-dropdown>
</mf-header>
```

{% raw %}

```jsx:react
import MfHeader from '@maf-ui/maf-ui/dist/react/mf-header';
import MfImg from '@maf-ui/maf-ui/dist/react/mf-img';
import MfNavigation from '@maf-ui/maf-ui/dist/react/mf-navigation';
import MfNavItem from '@maf-ui/maf-ui/dist/react/mf-nav-item';

const App = () => (
  <MfHeader template="singleRow" style={{maxWidth: '1400px',margin: '0 auto',backgroundColor: 'rgba(0, 0, 0, 1)'}}>
    <MfImg slot="logo"
        src="https://www.malloftheemirates.com/images/default-source/default-album/navigation-_desktop_-_1_.webp?sfvrsn=c2c2c500_2"
        alt="MAF" ></MfImg>
    <MfNavigation slot="navigation">
        <mf-nav-item wide highlight>
            Men
            <MfNavigation slot="subnav" wide>
                <MfNavItem value="sale" highlight>Sale</MfNavItem>
                <MfNavItem value="new-in" wide>New In
                    <MfNavigation slot="subnav" wide>
                        <MfNavItem value="adidas">Adidas</MfNavItem>
                        <MfNavItem value="nike">Nike</MfNavItem>
                        <MfNavItem value="nb">NB</MfNavItem>
                        <MfNavItem value="item">item</MfNavItem>
                        <MfNavItem value="item">item</MfNavItem>
                    </MfNavigation>
                </MfNavItem>
                <MfNavItem value="designer">Designers</MfNavItem>
                <MfNavItem value="clothing">clothing</MfNavItem>
                <MfNavItem value="shoes">Shoes</MfNavItem>
            </MfNavigation>
        </MfNavItem>

        <MfNavItem wide>
            Women
            <MfNavigation slot="subnav" wide>
                <MfNavItem value="sale" highlight>Sale</MfNavItem>
                <MfNavItem value="new-in">New In</MfNavItem>
                <MfNavItem value="designer">Designers</MfNavItem>
                <MfNavItem value="clothing">clothing</MfNavItem>
                <MfNavItem value="shoes">Shoes</MfNavItem>
            </MfNavigation>
        </MfNavItem>

        <MfNavItem wide>
            Home & Gifts
            <MfNavigation slot="subnav" wide>
                <MfNavItem value="sale" highlight>Sale</MfNavItem>
                <MfNavItem value="new-in">New In</MfNavItem>
                <MfNavItem value="designer">Designers</MfNavItem>
                <MfNavItem value="clothing">clothing</MfNavItem>
                <MfNavItem value="shoes">Shoes</MfNavItem>
            </MfNavigation>
        </MfNavItem>
    </MfNavigation>
</MfHeader>
);
```

{% endraw %}

### Separate Navigation Example

```html:preview
<mf-header style="max-width: 1400px;margin: 0 auto;" template="separateNavigation">
      <mf-img slot="logo"
          src="https://api-prod.thatconceptstore.com/medias/THATlogo.svg?context=bWFzdGVyfGltYWdlc3wxOTA1fGltYWdlL3N2Zyt4bWx8YURBNEwyZ3pPQzg1TkRNNE5EUTVNak00TURRMkwxUklRVlJzYjJkdkxuTjJad3xkMjhkOGMyODljNjEyMzlhODBkZDQzMGM0NDdiNzEzODljNjU0NWU1MmJlZDk3MjVkYTA5Y2Y1NDBiZGU1MzJi"
          alt="MAF"></mf-img>

      <mf-navigation slot="navigation">
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
      <sl-dropdown slot="actions">
        <sl-icon-button name="person-circle" label="auth" slot="trigger" style="font-size: 2.5rem;"></sl-icon-button>
  <sl-menu>
    <sl-menu-item value="login">Login</sl-menu-item>
    <sl-menu-item value="register">Register</sl-menu-item>
    <sl-menu-item value="logout">Logout</sl-menu-item>
  </sl-menu>
</sl-dropdown>
  </mf-header>
```

{% raw %}

```jsx:react
import MfHeader from '@maf-ui/maf-ui/dist/react/mf-header';
import MfImg from '@maf-ui/maf-ui/dist/react/mf-img';
import MfNavigation from '@maf-ui/maf-ui/dist/react/mf-navigation';
import MfNavItem from '@maf-ui/maf-ui/dist/react/mf-nav-item';

const App = () => (
  <MfHeader template="separateNavigation" style={{maxWidth: '1400px',margin: '0 auto',backgroundColor: 'rgba(0, 0, 0, 1)'}}>
    <MfImg slot="logo"
        src="https://www.malloftheemirates.com/images/default-source/default-album/navigation-_desktop_-_1_.webp?sfvrsn=c2c2c500_2"
        alt="MAF" ></MfImg>
    <MfNavigation slot="navigation">
        <mf-nav-item wide highlight>
            Men
            <MfNavigation slot="subnav" wide>
                <MfNavItem value="sale" highlight>Sale</MfNavItem>
                <MfNavItem value="new-in" wide>New In
                    <MfNavigation slot="subnav" wide>
                        <MfNavItem value="adidas">Adidas</MfNavItem>
                        <MfNavItem value="nike">Nike</MfNavItem>
                        <MfNavItem value="nb">NB</MfNavItem>
                        <MfNavItem value="item">item</MfNavItem>
                        <MfNavItem value="item">item</MfNavItem>
                    </MfNavigation>
                </MfNavItem>
                <MfNavItem value="designer">Designers</MfNavItem>
                <MfNavItem value="clothing">clothing</MfNavItem>
                <MfNavItem value="shoes">Shoes</MfNavItem>
            </MfNavigation>
        </MfNavItem>

        <MfNavItem wide>
            Women
            <MfNavigation slot="subnav" wide>
                <MfNavItem value="sale" highlight>Sale</MfNavItem>
                <MfNavItem value="new-in">New In</MfNavItem>
                <MfNavItem value="designer">Designers</MfNavItem>
                <MfNavItem value="clothing">clothing</MfNavItem>
                <MfNavItem value="shoes">Shoes</MfNavItem>
            </MfNavigation>
        </MfNavItem>

        <MfNavItem wide>
            Home & Gifts
            <MfNavigation slot="subnav" wide>
                <MfNavItem value="sale" highlight>Sale</MfNavItem>
                <MfNavItem value="new-in">New In</MfNavItem>
                <MfNavItem value="designer">Designers</MfNavItem>
                <MfNavItem value="clothing">clothing</MfNavItem>
                <MfNavItem value="shoes">Shoes</MfNavItem>
            </MfNavigation>
        </MfNavItem>
    </MfNavigation>
</MfHeader>
);
```

{% endraw %}

[component-metadata:mf-header]
