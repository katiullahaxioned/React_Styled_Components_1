import styled from "styled-components";

const StyledHeader = styled.section`
  background: lightblue;

  > * {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      ${(props) => props.theme.dark};
      font-size: 32px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .hamburger {
      width: 34px;
      height: 34px;
      border: 3px solid ${(props) => props.theme.dark};
      border-radius: 4px;
      display: none;
      overflow: hidden;
      position: relative;
      cursor: pointer;

      .bar {
        width: 70%;
        height: 4px;
        border-radius: inherit;
        position: absolute;
        top: 50%;
        left: 50%;
        background: ${(props) => props.theme.dark};
        text-indent: -99999px;
        transform: translate(-50%, -50%);
        transition: all 0.3s;

        &::before,
        &::after {
          content: "";
          width: 100%;
          height: 100%;
          border-radius: inherit;
          position: absolute;
          left: 0;
          background: inherit;
          transition: all 0.3s;
        }

        &::before {
          top: -200%;
        }
        &::after {
          top: 200%;
        }

        &.active {
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &.active::before {
          top: 0;
        }

        &.active::after {
          top: 0;
          transform: rotate(-90deg);
        }
      }
    }

    .nav-menu {
      display: flex;
      gap: 20px;

      .link {
        font-weight: 600;
        text-transform: uppercase;
        color: ${(props) => props.theme.dark};

        &:hover {
          color: ${(props) => props.theme.cyan};
        }
        &.active {
          color: ${(props) => props.theme.cyan};
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hamburger {
      display: block;
      z-index: 11;
    }

    nav {
      width: 100%;
      min-height: 100vh;
      display: grid;
      overflow-x: hidden;
      position: fixed;
      z-index: 10;
      top: -100%;
      left: 0;
      background: #ddd;
      place-items: center;
      transition: all 0.3s;

      &.active {
        top: 0;
      }
    }

    .nav-menu {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export default StyledHeader;
