import Slide from '../components/Slide/index.ts'
import { StyleSheetManager } from 'styled-components';
import { shouldForwardProp } from './utils/shouldForwardProp.ts';
import './App.css';

export default function App() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <div className="wrapper">
        <Slide />
      </div>
    </StyleSheetManager>
  );
}
