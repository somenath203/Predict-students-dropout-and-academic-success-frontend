import { Form, message } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormPartOne from './FormPartOne';
import FormPartTwo from './FormPartTwo';
import FormPartThree from './FormPartThree';
import FormPartFour from './FormPartFour';
import { showLoading, hideLoading } from '../../redux/alertSlice';
import ProtectedNavbar from '../../components/ProtectedNavbar';



const StudentSuccessFailurePredictorForm = () => {


  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isFormSubmiitedSuccessfully, setIsFormSubmittedSuccessfully] = useState(false);

  const [studentInfo, setStudentInfo] = useState({
    courseCode: '33',
    daytimeEveningAttendance: '1',
    prevQualification: '1',
    prevQualificationGrade: '',
    admissionGrade: '',
    educationalSpecialNeeds: '1',
    tuitionFeesUptoDate: '1',
    gender: '1',
    scholarshipHolder: '1',
    ageOfEnrollment: '',
    circularUnitsFirstSemCredited: '',
    circularUnitsFirstSemEnrolled: '',
    circularUnitsFirstSemEvaluations: '',
    circularUnitsFirstSemApproved: '',
    circularUnitsFirstSemGrade: '',
    circularUnitsFirstSemWithoutEvaluations: '',
    circularUnitsSecondSemCredited: '',
    circularUnitsSecondSemEnrolled: '',
    circularUnitsSecondSemEvaluations: '',
    circularUnitsSecondSemApproved: '',
    circularUnitsSecondSemGrade: '',
    circularUnitsSecondSemWithoutEvaluations: ''
  });


  const dispFormPages = () => {

    if (page === 0) {

      return <FormPartOne studentInfo={studentInfo} setStudentInfo={setStudentInfo} />;

    } else if (page === 1) {

      return <FormPartTwo studentInfo={studentInfo} setStudentInfo={setStudentInfo} />;

    } else if (page === 2) {

      return <FormPartThree studentInfo={studentInfo} setStudentInfo={setStudentInfo} />;

    } else if (page === 3) {

      return <FormPartFour studentInfo={studentInfo} setStudentInfo={setStudentInfo} />;

    }

  };


  const onSubmitStudentAcademicPredictorForm = async (e) => {

    e.preventDefault();

    if (isFormSubmiitedSuccessfully) {

      if (!(
        studentInfo.prevQualificationGrade &&
        studentInfo.admissionGrade &&
        studentInfo.ageOfEnrollment &&
        studentInfo.circularUnitsFirstSemCredited &&
        studentInfo.circularUnitsFirstSemEnrolled &&
        studentInfo.circularUnitsFirstSemEvaluations &&
        studentInfo.circularUnitsFirstSemApproved &&
        studentInfo.circularUnitsFirstSemGrade &&
        studentInfo.circularUnitsFirstSemWithoutEvaluations &&
        studentInfo.circularUnitsSecondSemCredited &&
        studentInfo.circularUnitsSecondSemEnrolled &&
        studentInfo.circularUnitsSecondSemEvaluations &&
        studentInfo.circularUnitsSecondSemApproved &&
        studentInfo.circularUnitsSecondSemGrade &&
        studentInfo.circularUnitsSecondSemWithoutEvaluations
      )) {

        setIsFormSubmittedSuccessfully(false);

        message.error('please fill all the input fields');

      } else {

        if (!((studentInfo.prevQualificationGrade >= 0 && studentInfo.prevQualificationGrade <= 200) &&
          (studentInfo.admissionGrade >= 0 && studentInfo.admissionGrade <= 200) &&
          (studentInfo.circularUnitsFirstSemGrade >= 0 && studentInfo.circularUnitsFirstSemGrade <= 20) &&
          (studentInfo.circularUnitsSecondSemGrade >= 0 && studentInfo.circularUnitsSecondSemGrade <= 20) &&
          (studentInfo.circularUnitsFirstSemCredited >= 0 && studentInfo.circularUnitsFirstSemCredited <= 50) &&
          (studentInfo.circularUnitsFirstSemEnrolled >= 0 && studentInfo.circularUnitsFirstSemEnrolled <= 50) &&
          (studentInfo.circularUnitsFirstSemEvaluations >= 0 && studentInfo.circularUnitsFirstSemEvaluations <= 50) &&
          (studentInfo.circularUnitsFirstSemApproved >= 0 && studentInfo.circularUnitsFirstSemApproved <= 50) &&
          (studentInfo.circularUnitsFirstSemWithoutEvaluations >= 0 && studentInfo.circularUnitsFirstSemWithoutEvaluations <= 50) &&
          (studentInfo.circularUnitsSecondSemCredited >= 0 && studentInfo.circularUnitsSecondSemCredited <= 50) &&
          (studentInfo.circularUnitsSecondSemEnrolled >= 0 && studentInfo.circularUnitsSecondSemEnrolled <= 50) &&
          (studentInfo.circularUnitsSecondSemEvaluations >= 0 && studentInfo.circularUnitsSecondSemEvaluations <= 50) &&
          (studentInfo.circularUnitsSecondSemApproved >= 0 && studentInfo.circularUnitsSecondSemApproved <= 50) &&
          (studentInfo.circularUnitsSecondSemWithoutEvaluations >= 0 && studentInfo.circularUnitsSecondSemWithoutEvaluations) &&
          (studentInfo.ageOfEnrollment >= 3 && studentInfo.ageOfEnrollment <= 80))) {

          setIsFormSubmittedSuccessfully(false);

          message.error('please enter the inputs within the specified range ')

        } else {

          setIsFormSubmittedSuccessfully(false);


          try {

            dispatch(showLoading());

            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_FAST_API_BASE_URL}/predict`, {
              course_name: Number(studentInfo.courseCode),
              daytime_evening_attendance: Number(studentInfo.daytimeEveningAttendance),
              prev_qualification: Number(studentInfo.prevQualification),
              prev_qualification_grade: Number(studentInfo.prevQualificationGrade),
              admission_grade: Number(studentInfo.admissionGrade),
              educational_special_needs: Number(studentInfo.educationalSpecialNeeds),
              tution_fees_upto_date: Number(studentInfo.tuitionFeesUptoDate),
              gender: Number(studentInfo.gender),
              scholarship_holder: Number(studentInfo.scholarshipHolder),
              age_of_enrollement: Number(studentInfo.ageOfEnrollment),
              cirricular_units_first_unit_sem_credited: Number(studentInfo.circularUnitsFirstSemCredited),
              cirricular_units_first_unit_sem_enrolled: Number(studentInfo.circularUnitsFirstSemEnrolled),
              cirricular_units_first_unit_sem_evaluations: Number(studentInfo.circularUnitsFirstSemEvaluations),
              cirricular_units_first_unit_sem_approved: Number(studentInfo.circularUnitsFirstSemApproved),
              cirricular_units_first_unit_sem_grade: Number(studentInfo.circularUnitsFirstSemGrade),
              cirricular_units_first_unit_sem_without_evaluations: Number(studentInfo.circularUnitsFirstSemWithoutEvaluations),
              cirricular_units_second_unit_sem_credited: Number(studentInfo.circularUnitsSecondSemCredited),
              cirricular_units_second_unit_sem_enrolled: Number(studentInfo.circularUnitsSecondSemEnrolled),
              cirricular_units_second_unit_sem_evaluations: Number(studentInfo.circularUnitsSecondSemEvaluations),
              cirricular_units_second_unit_sem_approved: Number(studentInfo.circularUnitsSecondSemApproved),
              cirricular_units_second_unit_sem_grade: Number(studentInfo.circularUnitsSecondSemGrade),
              cirricular_units_second_unit_sem_without_evaluations: Number(studentInfo.circularUnitsSecondSemEvaluations)
            });

            if (data?.data === '0') {

              dispatch(hideLoading());

              swal("😥", data?.resMessage, "warning", {
                button: {
                  text: "Continue to Profile",
                },
              }).then(() => {
                navigate('/profile')
              });

              await axios.post(`${process.env.REACT_APP_BACKEND_NODE_API_BASE_URL}/postpredresult`, { predResultString: data?.resMessage }, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
                }
              });

            } else if (data?.data === '1') {

              dispatch(hideLoading());

              swal("✌️", data?.resMessage, "success", {
                button: {
                  text: "Continue to Profile",
                },
              }).then(() => {
                navigate('/profile')
              });

              await axios.post(`${process.env.REACT_APP_BACKEND_NODE_API_BASE_URL}/postpredresult`, { predResultString: data?.resMessage }, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
                }
              });

            } else if (data?.data === '2') {

              dispatch(hideLoading());

              swal("✌️", data?.resMessage, "success", {
                button: {
                  text: "Continue to Profile",
                },
              }).then(() => {
                navigate('/profile')
              });

              await axios.post(`${process.env.REACT_APP_BACKEND_NODE_API_BASE_URL}/postpredresult`, { predResultString: data?.resMessage }, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
                }
              });

            }

          } catch (error) {

            dispatch(hideLoading());

            console.log(error);

          }

        }

      }

    }
  }


  return (
    <div className='min-h-screen flex items-center flex-col bg-slate-100'>

      <ProtectedNavbar />

      <div className='w-5/6 lg:w-4/6 mt-16'>

        <Form layout='vertical' onSubmitCapture={onSubmitStudentAcademicPredictorForm}>

          <div className='mb-8 w-full flex justify-between items-center text-sm lg:text-lg font-sans tracking-wider text-blue-600 font-semibold'>

            <p className='hidden lg:block'>Student Success Dropout Predictor Form</p>

            <p>{page + 1} / 4</p>

          </div>

          {dispFormPages()}

          <div className='w-full flex items-center justify-between'>
            <button
              disabled={page === 0}
              className='w-3/6 lg:w-1/4 disabled:bg-blue-300 mt-1 mb-6 text-center bg-blue-600 hover:bg-blue-800 transition-all duration-500 text-white py-3 rounded-lg text-base lg:text-lg tracking-widest'
              onClick={() => setPage((currPage) => currPage - 1)}
            >PREVIOUS</button>
            {page === 3 ? (
              <button
                className='w-2/6 lg:w-1/4 mt-1 mb-6 text-center bg-blue-600 hover:bg-blue-800 transition-all duration-500 text-white py-3 rounded-lg text-base lg:text-lg tracking-widest'
                onClick={() => setIsFormSubmittedSuccessfully(true)}
                type='submit'
              >SUBMIT</button>
            ) : <button
              onClick={() => setPage((currPage) => currPage + 1)}
              className='w-2/6 lg:w-1/4 mt-1 mb-6 text-center bg-blue-600 hover:bg-blue-800 transition-all duration-500 text-white py-3 rounded-lg text-base lg:text-lg tracking-widest'
            >NEXT</button>}
          </div>

        </Form>

      </div>


    </div>
  )
};


export default StudentSuccessFailurePredictorForm;

