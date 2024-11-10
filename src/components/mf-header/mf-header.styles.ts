import { css } from 'lit';

export default css`
  :host {
    display: block;
    position: relative;
  }
  header {
    display: block;
    width: 100%;
  }

  header slot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
