import { Login, Signup } from "@modules/auth/pages";
import { Error404 } from "@modules/error";
import { Forms } from "@modules/forms/page";
import { NewForm } from "@modules/forms/page/createNewForm";
import { Home } from "@modules/home/page";
import { Route, Routes } from "react-router-dom";
import { SubmitFormResponse } from "@modules/forms/page/submitFormResponse";
import { AboutUs } from "@modules/aboutUs/pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/forms" element={<Forms />}>
        <Route path="/forms/create/:id" element={<NewForm />} />
        <Route path="/forms/update/:id" element={<NewForm />} />
        <Route
          path="/forms/forms-response/:formId"
          element={<SubmitFormResponse />}
        />
        <Route
          path="/forms/forms-response/view/:formId/:responseId"
          element={<SubmitFormResponse />}
        />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
