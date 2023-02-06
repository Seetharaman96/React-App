import { useFormik } from "formik";
import * as yup from "yup";

let formValidationSchema = yup.object({
  email: yup.string().email().required().min(12),
  password: yup.string().required().min(8).max(12),
});
// export function BasicForm() {
//   let formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: formValidationSchema,
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <input
//         name="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//         type="email"
//         placeholder="email"
//       />
//       {formik.touched.email && formik.errors.email ? formik.errors.email : null}
//       <input
//         name="password"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.password}
//         type="password"
//         placeholder="password"
//       />
//       {formik.touched.password && formik.errors.password
//         ? formik.errors.password
//         : null}
//       <button>Submit</button>
//     </form>
//   );
// }

// with destrucuturing
export function BasicForm() {
  let { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => console.log("Form values", values),
    });
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        type="email"
        placeholder="email"
      />
      {touched.email && errors.email ? errors.email : null}
      <input
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        type="password"
        placeholder="password"
      />
      {touched.password && errors.password ? errors.password : null}
      <button type="submit">Submit</button>
    </form>
  );
}
