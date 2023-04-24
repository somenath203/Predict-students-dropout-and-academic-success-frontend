import { Form } from 'antd';

const FormPartOne = ({ studentInfo, setStudentInfo }) => {
  return (
    <>

      {/* 01) Course Code */}
      <Form.Item
        label="Course Name"
        name="coursecode"
      >

        <select
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          value={studentInfo.courseCode}
          onChange={(e) => setStudentInfo({...studentInfo, courseCode: e.target.value})}
        >
          <option value="33">Biofuel Production Technologies</option>
          <option value="171">Animation and Multimedia Design</option>
          <option value="8014">Social Service</option>
          <option value="9003">Agronomy</option>
          <option value="9070">Communication Design</option>
          <option value="9085">Veterinary Nursing</option>
          <option value="9119">Informatics Engineering</option>
          <option value="9130">Equinculture</option>
          <option value="9147">Management</option>
          <option value="9238">Social Service</option>
          <option value="9254">Tourism</option>
          <option value="9500">Nursing</option>
          <option value="9556">Oral Hygiene</option>
          <option value="9670">Advertising and Marketing Management</option>
          <option value="9773">Journalism and Communication</option>
          <option value="9853">Basic Education</option>
        </select>

      </Form.Item>

      {/* 2) daytime/evening attendance */}
      <Form.Item
        label="Do you attend classes in daytime or in evening?"
        name="daytimeeveningattendance"
        rules={[
          {
            required: true,
            message: 'daytime/evening attendance is required',
          },
        ]}
      >

        <select
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          value={studentInfo.daytimeEveningAttendance}
          onChange={(e) => setStudentInfo({ ...studentInfo, daytimeEveningAttendance: e.target.value })}
        >
          <option value="1">Daytime</option>
          <option value="0">Evening</option>
        </select>

      </Form.Item>

      {/* 03) Previous Qualification */}
      <Form.Item
        label="Previous Qualification"
        name="prevqualification"
      >

        <select
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          value={studentInfo.prevQualification}
          onChange={(e) => setStudentInfo({...studentInfo, prevQualification: e.target.value})}
        >
          <option value="1">Secondary Education</option>
          <option value="2">Higher Education - Bachelor's Degree</option>
          <option value="4">Higher Education - Master's</option>
          <option value="5">Higher Education - Doctorate</option>
          <option value="9">12th year of Schooling - Not Completed</option>
          <option value="6">12th year of Schooling - Completed</option>
          <option value="10">11th year of Schooling - Not Completed</option>
          <option value="12">11th year of Schooling - Completed</option>
          <option value="15">10th year of Schooling - Not Completed</option>
          <option value="14">10th year of Schooling - Completed</option>
          <option value="19">Basic Education 3rd cycle (9th/10th/11th year) or equiv</option>
          <option value="38">Basic Education 2nd cycle (6th/7th/8th year) or equiv</option>
          <option value="39">Technological Specialization Course</option>
          <option value="40">Higher Education - Degree (1st cycle)</option>
          <option value="42">Professional Higher Technical Course</option>
          <option value="43">Higher Education - Master (2nd cycle)</option>
        </select>

      </Form.Item>

      {/* 04) previous qualification(grade) */}
      <Form.Item
        label="Previous Qualification(Grade)"
        name="prevqualificationgrade"
        rules={[
          {
            required: true,
            message: 'previous qualifiation(grade) is required',
          },
        ]}
      >
        <input
          type="number"
          className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
          placeholder='enter your previous qualification(grade) (0-200)'
          min="0"
          max="200"
          value={studentInfo.prevQualificationGrade}
          onChange={(e) => setStudentInfo({ ...studentInfo, prevQualificationGrade: e.target.value })}
        />
      </Form.Item>

    </>
  )
};

export default FormPartOne;