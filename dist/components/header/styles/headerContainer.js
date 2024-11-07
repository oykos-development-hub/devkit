import styled from "styled-components";
export const HeaderContainer = styled.div `
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => { var _a; return (((_a = props.style) === null || _a === void 0 ? void 0 : _a.backgroundColor) ? props.style.backgroundColor : "#AE3C18"); }};
    padding: 0 35px;
    position: absolute;
    width: 100vw;
    height: 100px;
    left: 0px;
    top: 0px;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .header .logo {
    width: 70px;
    height: 80px;
    flex: none;
    flex-grow: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .header-icon {
    overflow: hidden;
    position: relative;
    width: 60px;
    height: 45px;
    margin-top: 28px;
    margin-bottom: 28px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-icon .icon {
    position: relative;
    display: flex;
  }

  .header-icon .icon::before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    width: 9px;
    height: 9px;
    z-index: 1;
  }

  @media (max-width: 1600px) {
    .header {
      height: 60px;
    }

    .header .logo {
      width: 35px;
      height: 40px;
    }

    .header .logo > * {
      width: 100%;
      height: 100%;
    }
  }
`;
//# sourceMappingURL=headerContainer.js.map