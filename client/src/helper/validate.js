import toast from 'react-hot-toast'
import { authenticate } from './helper'

/** validate login page username */
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);

    if (values.username) {
        // check user exist or not
        const { status } = await authenticate(values.username);

        if (status !== 200) {
            errors.exist = toast.error('User does not exist...!')
        }
    }

    return errors;
}

/** validate password */
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values);

    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error("Password not match...!");
    }

    return errors;
}

/** validate register form */
export async function registerValidation(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);
    fnameVerify(errors, values);
    lnameVerify(errors, values);
    mobileVerify(errors, values);
    instituteVerify(errors, values);
    tidVerify(errors, values);

    return errors;
}

/** validate profile page */
export async function profileValidation(values) {
    const errors = emailVerify({}, values);
    return errors;
}


/** ************************************************* */

/** validate password */
function passwordVerify(errors = {}, values) {
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        errors.password = toast.error("Password Required!");
    } else if (values.password.includes(" ")) {
        errors.password = toast.error("Spaces not allowed in Password!");
    } else if (values.password.length < 4) {
        errors.password = toast.error("Password must be more than 4 characters long");
    } else if (!specialChars.test(values.password)) {
        errors.password = toast.error("Password must have special character");
    }

    return errors;
}


/** validate username */
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error('Username Required!');
    } else if (values.username.includes(" ")) {
        error.username = toast.error('Spaces not allowed in Username!')
    } else if (values.username.length <= 3) {
        error.username = toast.error('Username atleast 4 characters!')
    }

    return error;
}

/** validate email */
function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error("Email Required...!");
    } else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong Email...!")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}

function fnameVerify(error = {}, values) {
    if (!values.firstName) {
        error.firstName = toast.error("First Name Required...!");
    }
    return error
}
function lnameVerify(error = {}, values) {
    if (!values.lastName) {
        error.lastName = toast.error("Last Name Required...!");
    }
    return error
}
function instituteVerify(error = {}, values) {
    if (!values.institute) {
        error.institute = toast.error("Institute Name Required...!");
    }
    return error
}
function tidVerify(error = {}, values) {
    if (!values.tid) {
        error.tid = toast.error("Transaction ID Required...!");
    }
    return error
}
function mobileVerify(error = {}, values) {
    if (!values.mobile) {
        error.mobile = toast.error("Mobile No. Required...!");
    } else if (values.mobile.length !== 10) {
        error.mobile = toast.error("Invalid Mobile No.!");
    }else if(isNaN(values.mobile)){
        error.mobile = toast.error("Invalid Mobile No.!2");
    }
    return error
}