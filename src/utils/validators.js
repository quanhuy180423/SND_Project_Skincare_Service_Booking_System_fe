
/**
 * Validate form đăng nhập/đăng kí.
 * @param {object} formValues 
 * @returns {object} - Một object chứa { valid, errors }
 */
export const validateLoginForm = (formValues) => {
    let valid = true;
    const errors = { email: "", password: "" };
  
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Nhập đúng định dạng email";
      valid = false;
    }
  
    if (!formValues.password || formValues.password.length < 6) {
      errors.password = "Mật khẩu tối thiểu 6 kí tự";
      valid = false;
    }
  
    return { valid, errors };
  };
  export function validateRegisterForm(formValues) {
    let newErrors = {};
    let valid = true;
  
    if (!formValues.username.trim()) {
      newErrors.username = "Tên người dùng không được để trống.";
      valid = false;
    }
  
    if (!formValues.email.trim()) {
      newErrors.email = "Email không được để trống.";
      valid = false;
    }
  
    if (!formValues.password.trim()) {
      newErrors.password = "Mật khẩu không được để trống.";
      valid = false;
    }
  
    if (!formValues.confirmPassword.trim()) {
      newErrors.confirmPassword = "Vui lòng nhập lại mật khẩu.";
      valid = false;
    }
  
    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp.";
      valid = false;
    }
  
    if (!formValues.agreeTerms) {
      newErrors.agreeTerms = "Bạn phải đồng ý với điều khoản.";
      valid = false;
    }
  
    return { valid, newErrors };
  }
  
  
  