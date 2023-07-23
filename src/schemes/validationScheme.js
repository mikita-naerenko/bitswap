import * as Yup from 'yup';



export const validationSchema = Yup.object({
    firstName: Yup.string().min(2, 'First name must be at least 2 characters').required('Field is required'),
    lastName: Yup.string().min(2, 'Last name must be at least 2 characters').required('Field is required'),
    email: Yup.string().email('Invalid email'),
    phone: Yup.string().min(8, 'Phone must be at least 8 characters'),
    country: Yup.string().min(2, 'Must be at least 2 characters'),
    city: Yup.string().min(2, 'Must be at least 2 characters'),
    cardholdersname: Yup.string().matches(/^[A-Za-z]+ [A-Za-z]+$/, 'Cardholders name must be like "John Doe"').required('Field is required'),
    month: Yup.string().required('Field is required'),
    year: Yup.string().required('Field is required'),
    cardnumber: Yup.string().matches(/^\d{13,19}$/, 'Enter correct card number').required('Field is required'),
    cvv: Yup.string().matches(/^\d{3}$/, 'Enter correct CVV'),
    payment: Yup.string().matches(/^\d+(\.\d{1,2})?$/, 'Enter correct amount').required('Enter the amount you want to deposit into your account'),
  });

