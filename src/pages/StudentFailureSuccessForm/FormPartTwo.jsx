import { Form } from 'antd';

const FormPartTwo = ({ studentInfo, setStudentInfo }) => {
  return (
    <>

      {/* 05) admission grade */}
      <Form.Item
        label="Admission Grade"
        name="admissiongrade"
        rules={[
          {
            required: true,
            message: 'admission grade is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter your admission grade (0-200)'
          min="0"
          max="200"
          value={studentInfo.admissionGrade}
          onChange={(e) => setStudentInfo({ ...studentInfo, admissionGrade: e.target.value })}
        />
      </Form.Item>

      {/* 06) education special needs */}
      <Form.Item
        label="Have you opted for 'Educational Special Needs' ?"
        name="educationalspecialneeds"
      >

        <select
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          value={studentInfo.educationalSpecialNeeds}
          onChange={(e) => setStudentInfo({ ...studentInfo, educationalSpecialNeeds: e.target.value })}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

      </Form.Item>

      {/* 07) tution fees upto date */}
      <Form.Item
        label="Is your tuition fees upto date ?"
        name="tuitionfeesuptodate"
      >

        <select
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          value={studentInfo.tuitionFeesUptoDate}
          onChange={(e) => setStudentInfo({ ...studentInfo, tuitionFeesUptoDate: e.target.value })}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

      </Form.Item>

      {/* 08) gender */}
      <Form.Item
        label="Gender"
        name="gender"
      >

        <select
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          value={studentInfo.gender}
          onChange={(e) => setStudentInfo({ ...studentInfo, gender: e.target.value })}
        >
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>

      </Form.Item>

      {/* 09) scholarship holder */}
      <Form.Item
        label="Scholarship Holder"
        name="scholarshipholder"
      >

        <select
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          value={studentInfo.scholarshipHolder}
          onChange={(e) => setStudentInfo({ ...studentInfo, scholarshipHolder: e.target.value })}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

      </Form.Item>

      {/* 10) age of enrollment */}
      <Form.Item
        label="Age of Enrollment"
        name="ageofenrollment"
        rules={[
          {
            required: true,
            message: 'age of enrollment is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter your age of enrollment (0-80)'
          min="3"
          max="80"
          value={studentInfo.ageOfEnrollment}
          onChange={(e) => setStudentInfo({ ...studentInfo, ageOfEnrollment: e.target.value })}
        />
      </Form.Item>

    </>
  )
};

export default FormPartTwo;