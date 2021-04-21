import React from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'

const SearchField = () => {
  const formik = useFormik({
    initialValues: {
      locationFrom: '',
      locationTo: '',
      departureDate: ''
    }, 
    validationSchema: Yup.object({
      locationFrom: Yup.string().required('Required'),
      locationTo: Yup.string().required('Required'),
      departureDate: Yup.date().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <form className="form-inline" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="locationFrom">from</label>
        <select
          name="locationFrom"
          id="locationFrom"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.locationFrom}
        >
          <option value="">Select...</option>
          <option value="nairobi">Nairobi Terminus</option>
          <option value="mombasa">Mombasa Terminus</option>
          <option value="voi">Voi</option>
          <option value="mtito andei">Mtito Andei</option>
          <option value="mariakani">Mariakani</option>
          <option value="miaseny">Miaseny</option>
          <option value="kibwezi">Kibwezi</option>
          <option value="emali">Emali</option>
          <option value="athi river">Athi River</option>
        </select>
      </div>

      {formik.errors.locationFrom ? <div>{formik.errors.locationFrom}</div> : null}

      <div className="form-group">
        <label htmlFor="locationTo">to</label>
        <select
          name="locationTo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.locationTo}
        >
          <option value="">Select...</option>
          <option value="nairobi terminus">Nairobi Terminus</option>
          <option value="mombasa terminus">Mombasa Terminus</option>
          <option value="voi">Voi</option>
          <option value="mtito andei">Mtito Andei</option>
          <option value="mariakani">Mariakani</option>
          <option value="miaseny">Miaseny</option>
          <option value="kibwezi">Kibwezi</option>
          <option value="emali">Emali</option>
          <option value="athi river">Athi River</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="departureDate">departure date</label>
        <input
          type="date"
          className="input-date"
          name="date"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.departureDate}
        />
      </div>
      <button type="submit" className="btn-outline-default">book a train</button>
    </form>
  );
};

export default SearchField;
