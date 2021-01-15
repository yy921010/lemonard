import { createGlobalStyle } from 'styled-components';
import { c07, c31, c04 } from '@/styled/color';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  body {
    padding:0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:${c07};
    color: ${c31};
    height: 100%;
    user-select: none;
    #root{
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 81px;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(45deg, transparent 0%, transparent 46%,rgba(114, 114, 114,0.06) 46%, rgba(114, 114, 114,0.06) 70%,transparent 70%, transparent 100%),linear-gradient(135deg, transparent 0%, transparent 59%,rgba(114, 114, 114,0.06) 59%, rgba(114, 114, 114,0.06) 91%,transparent 91%, transparent 100%),linear-gradient(0deg, transparent 0%, transparent 15%,rgba(114, 114, 114,0.06) 15%, rgba(114, 114, 114,0.06) 40%,transparent 40%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0));
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    a {
      text-decoration: none;
    }

    a[aria-current="page"].active{
      &:after {
            content: "";
            width: 100% !important;
            height: 4px;
            background-color: ${c04} !important;
            left: 0;
            top: 25px;
            position: absolute;
          }
    }
  }
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: unit(10);
  background-color: $C09;
}

/*定义滚动条轨道 内阴影+圆角*/
/* 滚动槽 */
::-webkit-scrollbar-track {
  background-color: $C09;
}

/*定义滑块 内阴影+圆角*/
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: unit(10);
  background-color: $C03;
}

/*交互时样式设置*/
::-webkit-scrollbar-thumb:window-inactive {
  background-color: $C03;
}

/* 两边按钮设置*/
::-webkit-scrollbar-button {
  display: none;
}
`;
export default GlobalStyle;
