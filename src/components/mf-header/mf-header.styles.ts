import { css } from 'lit';

export default css`
  :host {
    display: block;
    position: relative;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  header[template='header--template--basic'] {
  }
  header[template='header--template--singleRow'] {
  }
  header[template='header--template--separateNavigation'] .header__navigation {
    flex-basis: 100%;
    width: 100%;
    display: block;
  }
`;
