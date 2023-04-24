import { Form } from 'antd';

const FormPartFour = ({ studentInfo, setStudentInfo }) => {
  return (
    <>

      {/* 17) circular unit second semester credited */}
      <Form.Item
        label="Circular Unit Second Semester (Credited)"
        name="secondsemcredit"
        rules={[
          {
            required: true,
            message: 'circular unit second semester (credited) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units credited in the 2nd semester (0-50)'
          min="0"
          max="50"
          value={studentInfo.circularUnitsSecondSemCredited}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsSecondSemCredited: e.target.value })}
        />
      </Form.Item>

      {/* 18) circular unit second semester enrolled */}
      <Form.Item
        label="Circular Unit Second Semester (Enrolled)"
        name="secondsemenrolled"
        rules={[
          {
            required: true,
            message: 'circular unit second semester (enrolled) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units enrolled in the 2nd semester (0-50)'
          min="0"
          max="50"
          value={studentInfo.circularUnitsSecondSemEnrolled}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsSecondSemEnrolled: e.target.value })}
        />
      </Form.Item>

      {/* 19) circular unit second semester evaluation */}
      <Form.Item
        label="Circular Unit Second Semester (Evaluations)"
        name="secondsemevaluated"
        rules={[
          {
            required: true,
            message: 'circular unit second semester (evaluation) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units evaluated in the 2nd semester (0-50)'
          min="0"
          max="50"
          value={studentInfo.circularUnitsSecondSemEvaluations}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsSecondSemEvaluations: e.target.value })}
        />
      </Form.Item>

      {/* 20) circular unit second semester approved */}
      <Form.Item
        label="Circular Unit Second Semester (Approved)"
        name="secondsemapproved"
        rules={[
          {
            required: true,
            message: 'circular unit second semester (approved) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units approved in the 2nd semester (0-50)'
          min="0"
          max="50"
          value={studentInfo.circularUnitsSecondSemApproved}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsSecondSemApproved: e.target.value })}
        />
      </Form.Item>

      {/* 21) circular unit second semester grade */}
      <Form.Item
        label="Circular Unit Second Semester (grade)"
        name="secondsemgrade"
        rules={[
          {
            required: true,
            message: 'circular unit second semester (grade) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the average grade in the 2nd semester (0-20)'
          min="0"
          max="20"
          value={studentInfo.circularUnitsSecondSemGrade}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsSecondSemGrade: e.target.value })}
        />
      </Form.Item>

      {/* 22) circular unit second semester without evaluation */}
      <Form.Item
        label="Circular Unit Second Semester (without evaluation)"
        name="cirricularunitseconsemwithoutevaluation"
        rules={[
          {
            required: true,
            message: 'circular unit second semester (without evaluation) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter the number of curricular units without evalutions in the 2nd semester (0-50)'
          min="0"
          max="50"
          value={studentInfo.circularUnitsSecondSemWithoutEvaluations}
          onChange={(e) => setStudentInfo({ ...studentInfo, circularUnitsSecondSemWithoutEvaluations: e.target.value })}
        />
      </Form.Item>

    </>
  )
};

export default FormPartFour;