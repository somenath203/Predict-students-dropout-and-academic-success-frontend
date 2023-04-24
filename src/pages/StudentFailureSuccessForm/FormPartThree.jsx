import { Form } from 'antd';

const FormPartThree = ({ studentInfo, setStudentInfo }) => {
  return (
    <>

      {/* 11) circular unit first term credited */}
      <Form.Item
        label="Circular Unit First Semester (Credited)"
        name="firstsemcredit"
        rules={[
          {
            required: true,
            message: 'circular unit first semester (credited) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units credited in the 1st semester (0-50)'
          min="1"
          max="50"
          value={studentInfo.circularUnitsFirstSemCredited}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsFirstSemCredited: e.target.value })}
        />
      </Form.Item>

      {/* 12) circular unit first term enrolled */}
      <Form.Item
        label="Circular Unit First Semester (Enrolled)"
        name="cirricularunitfirstsemenrolled"
        rules={[
          {
            required: true,
            message: 'circular unit first semester (enrolled) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units enrolled in the 1st semester (0-50)'
          min="1"
          max="50"
          value={studentInfo.circularUnitsFirstSemEnrolled}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsFirstSemEnrolled: e.target.value })}
        />
      </Form.Item>

      {/* 13) circular unit first term evaluated */}
      <Form.Item
        label="Circular Unit First Semester (Evaluated)"
        name="firstsemevaluated"
        rules={[
          {
            required: true,
            message: 'circular unit first semester (evaluated) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units evaluated in the 1st semester (0-50)'
          min="1"
          max="50"
          value={studentInfo.circularUnitsFirstSemEvaluations}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsFirstSemEvaluations: e.target.value })}
        />
      </Form.Item>

      {/* 14) circular unit first term approved */}
      <Form.Item
        label="Circular Unit First Semester (Approved)"
        name="firstsemapproved"
        rules={[
          {
            required: true,
            message: 'circular unit first semester (approved) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units approved in the 1st semester (0-50)'
          min="1"
          max="50"
          value={studentInfo.circularUnitsFirstSemApproved}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsFirstSemApproved: e.target.value })}
        />
      </Form.Item>

      {/* 15) circular unit first term grade */}
      <Form.Item
        label="Circular Unit First Semester (Grade)"
        name="firstsemgrade"
        rules={[
          {
            required: true,
            message: 'circular unit first semester (grade) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the average grade of the first semester (0-20)'
          min="0"
          max="20"
          value={studentInfo.circularUnitsFirstSemGrade}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsFirstSemGrade: e.target.value })}
        />
      </Form.Item>

      {/* 16) circular unit first term without evaluations */}
      <Form.Item
        label="Circular Unit First Semester (Without Evaluations)"
        name="firstsemwithoutevaluation"
        rules={[
          {
            required: true,
            message: 'circular unit first semester (without evaluations) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units without evalutions in the 1st semester (0-50)'
          min="0"
          max="50"
          value={studentInfo.circularUnitsFirstSemWithoutEvaluations}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsFirstSemWithoutEvaluations: e.target.value })}
        />
      </Form.Item>

    </>
  )
};

export default FormPartThree;