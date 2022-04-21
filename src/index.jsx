import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./styles.css";

import FSABasic from "./form_sample_antd/Basic";
import FSAObjArr from "./form_sample_antd/ObjArr";
import FSArraySetLength from "./form_sample_antd/ArraySetLength";
import FSControlForm from "./form_sample_antd/ControlForm";
import FSNodeControl from "./form_sample_antd/NodeControl";
import FSNodeControl2 from "./form_sample_antd/NodeControl2";
import FSFormContext from "./form_sample_antd/FormContext";
import FSCustom from "./form_sample_antd/Custom";
import FSInputExt from "./form_sample_antd/InputExt";
import FSWatch from "./form_sample_antd/Watch";

import RHFBasic from "./react_hook_form/Basic";
import RHFObjArr from "./react_hook_form/ObjArr";
import RHFArraySetLength from "./react_hook_form/ArraySetLength";
import RHFControlForm from "./react_hook_form/ControlForm";
import RHFNodeControl from "./react_hook_form/NodeControl";
import RHFNodeControl2 from "./react_hook_form/NodeControl2";
import RHFFormContext from "./react_hook_form/FormContext";
import RHFCustom from "./react_hook_form/Custom";
import RHFInputExt from "./react_hook_form/InputExt";
import RHFWatch from "./react_hook_form/Watch";

const routes = [
  {
    name: "기본",
    path: "form_sample_antd/basic",
    element: <FSABasic />
  },
  {
    name: "배열/객체 형태",
    path: "form_sample_antd/objarr",
    element: <FSAObjArr />
  },
  {
    name: "배열length 지정",
    path: "form_sample_antd/arraysetLength",
    element: <FSArraySetLength />
  },
  {
    name: "폼데이터 수정",
    path: "form_sample_antd/controlForm",
    element: <FSControlForm />
  },
  {
    name: "폼데이터 기반 요소 컨트롤",
    path: "form_sample_antd/nodeControl",
    element: <FSNodeControl />
  },
  {
    name: "폼데이터 기반 타 컴포넌트 컨트롤",
    path: "form_sample_antd/nodeControl2",
    element: <FSNodeControl2 />
  },
  {
    name: "FormInstance Context 처리",
    path: "form_sample_antd/formContext",
    element: <FSFormContext />
  },
  {
    name: "custom form",
    path: "form_sample_antd/custom",
    element: <FSCustom />
  },
  {
    name: "기타 컴포넌트킷 사용예제",
    path: "form_sample_antd/inputExt",
    element: <FSInputExt />
  },
  {
    name: "Watch",
    path: "form_sample_antd/watch",
    element: <FSWatch />
  },
];

const routes2 = [
  {
    name: "기본",
    path: "react_hook_form/basic",
    element: <RHFBasic />
  },
  {
    name: "배열/객체 형태",
    path: "react_hook_form/objarr",
    element: <RHFObjArr />
  },
  {
    name: "배열length 지정",
    path: "react_hook_form/arraysetLength",
    element: <RHFArraySetLength />
  },
  {
    name: "폼데이터 수정",
    path: "react_hook_form/controlForm",
    element: <RHFControlForm />
  },
  {
    name: "폼데이터 기반 요소 컨트롤",
    path: "react_hook_form/nodeControl",
    element: <RHFNodeControl />
  },
  {
    name: "폼데이터 기반 타 컴포넌트 컨트롤",
    path: "react_hook_form/nodeControl2",
    element: <RHFNodeControl2 />
  },
  {
    name: "FormInstance Context 처리",
    path: "react_hook_form/formContext",
    element: <RHFFormContext />
  },
  {
    name: "custom form",
    path: "react_hook_form/custom",
    element: <RHFCustom />
  },
  {
    name: "기타 컴포넌트킷 사용예제",
    path: "react_hook_form/inputExt",
    element: <RHFInputExt />
  },
  {
    name: "Watch",
    path: "react_hook_form/watch",
    element: <RHFWatch />
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div>
      <BrowserRouter>
        <nav>
          <ol>
            {routes.map((e) => (
              <li key={e.path}>
                <Link to={`/${e.path}`}>{e.name}(antd)</Link>
              </li>
            ))}
          </ol>
          <ol>
            {routes2.map((e) => (
              <li key={e.path}>
                <Link to={`/${e.path}`}>{e.name}(react-hook-form)</Link>
              </li>
            ))}
          </ol>
        </nav>
        <Routes>
          <Route path="/">
            <Route index element={<div>Main</div>} />
            {routes.map((e) => (
              <Route key={e.path} path={e.path} element={e.element} />
            ))}
            {routes2.map((e) => (
              <Route key={e.path} path={e.path} element={e.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>,
  rootElement
);
