const $template = document.createElement('template');
$template.innerHTML = `
<form action="" class="login-form">
<h2 class="title">Please sign in here</h2>
<div class="sub-tittle">Dung hoi e co ny chua?</div>
<input-wrapper class="email" placeholder="Your mail" type="mail" error=""></input-wrapper>
<input-wrapper class="password" placeholder="Your password" type="password" error=""></input-wrapper>
<button class="register-btn">Register</button>
</form>
`;
export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$loginForm = this.querySelector('.login-form');
        this.$email = this.querySelector('.email');
        this.$password = this.querySelector('.password');
    }
    connectedCallback() {
        this.$loginForm.onsubmit = (event) => {
            event.preventDefault();
            console.log("Login Successed");
            let isPassed =
                this.$email.validate((value) => {
                    return value != '';
                }, "Invalid Email") &
                this.$password.validate((value) => {
                    return value != '';
                }, "Invalid password")

            let data = {
                email: this.$email.value,
                password: this.$password.value
            };
            if (isPassed == true) {
                console.log("passed")
            }

        }
    }
}
window.customElements.define('login-form', LoginForm);