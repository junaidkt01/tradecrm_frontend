import { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import "./AuthForm.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ onLogin }: { onLogin: () => void }) => {
    console.log(onLogin)
    const navigate = useNavigate()

    const [text, setText] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [localToken, setLocalToken] = useState(null);
    const [swaggerToken, setSwaggerToken] = useState(null);
    const [manager, setManager] = useState(null);

    console.log("localToken:", localToken)
    console.log("swaggerToken:", swaggerToken)
    console.log("manager:", manager)

    const loginAndFetchManager = async (e: any) => {
        e.preventDefault();

        try {
            // Step 1: Login and store token
            const localLoginResponse = await axios.post('http://localhost:5000/api/auth/login', {
                username: email, // junaid
                password: password // 12345678
            });
            const localToken = localLoginResponse.data.token;
            setLocalToken(localToken);
            localStorage.setItem("local_token", localToken)

            // Step 2: Fetch the default manager using the local token
            const managerResponse = await axios.get('http://localhost:5000/api/managers/active', {
                headers: {
                    Authorization: `Bearer ${localToken}`
                }
            });
            setManager(managerResponse.data);

            // Step 3: Get another token from Swagger
            const swaggerTokenResponse = await axios.post('http://164.132.247.26:7506/Home/token', {
                userName: 'wibatoApi',
                password: 'Trade@202'
            });
            const swaggerToken = swaggerTokenResponse.data.token;
            setSwaggerToken(swaggerToken);
            localStorage.setItem("swagger_token", swaggerToken)

            // Step 4: Login the manager using the Swagger token
            const loginManagerResponse = await axios.post('http://164.132.247.27:75506/Home/login', {
                mngId: managerResponse.data.id,  // Assuming the manager's ID is required
                pwd: 'GnBdY+7e',
                srvIp: '198.244.231.237:443'

            }, {
                headers: {
                    Authorization: `Bearer ${swaggerToken}`
                }
            });
            console.log('Manager logged in with Swagger token:', loginManagerResponse.data);

            // if (localToken && swaggerToken) {
            if (loginManagerResponse.data) {
                navigate("/crm")
            }

        } catch (error) {
            console.error('Error occurred:', error);
        }
    };


    return (
        <div className="auth-form">
            <div className="auth-form-title" >
                <h2>Welcome Back to Logoipsum</h2>
                <p>Log in with your email</p>
            </div>

            <form action="" onSubmit={loginAndFetchManager} >
                <div className="input-fields" >
                    <div className="input-field" >
                        <label htmlFor="">Your E-mail</label>
                        <input type="text" placeholder="example@gmail.com" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="input-field" >
                        <label htmlFor="">Password</label>
                        <input type={text ? "text" : "password"} placeholder="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />

                        <span onClick={() => setText(!text)} >
                            {text ?
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.89899 12.7346C2.80091 12.5052 2.75 12.2542 2.75 12C2.75 11.7458 2.80091 11.4948 2.89899 11.2654C3.70725 9.34502 4.99868 7.72989 6.61515 6.61781C8.23161 5.50574 10.1029 4.945 12 5.00426C13.8971 4.945 15.7684 5.50574 17.3849 6.61781C19.0013 7.72989 20.2928 9.34502 21.101 11.2654C21.1991 11.4948 21.25 11.7458 21.25 12C21.25 12.2542 21.1991 12.5052 21.101 12.7346C20.2928 14.655 19.0013 16.2701 17.3849 17.3822C15.7684 18.4943 13.8971 19.055 12 18.9957C10.1029 19.055 8.23161 18.4943 6.61515 17.3822C4.99868 16.2701 3.70725 14.655 2.89899 12.7346Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.45 16.92C4.34837 15.8766 3.47942 14.6123 2.9 13.21C2.80095 12.9794 2.74988 12.731 2.74988 12.48C2.74988 12.229 2.80095 11.9806 2.9 11.75C3.66971 9.87608 4.96076 8.26226 6.62 7.09998C8.1945 5.99969 10.0797 5.43202 12 5.47998C13.3815 5.44566 14.7518 5.73684 16 6.32998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.56 8.04999C19.6553 9.09282 20.5204 10.3531 21.1 11.75C21.199 11.9806 21.2501 12.229 21.2501 12.48C21.2501 12.731 21.199 12.9794 21.1 13.21C20.3303 15.0839 19.0392 16.6977 17.38 17.86C15.8055 18.9603 13.9203 19.5279 12 19.48C10.6185 19.5143 9.24821 19.2231 8 18.63" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.70997 13.65C8.5693 13.2761 8.49813 12.8796 8.49997 12.48C8.49997 11.5518 8.86872 10.6615 9.5251 10.0051C10.1815 9.34876 11.0717 8.98002 12 8.98002C12.3995 8.97817 12.796 9.04934 13.17 9.19002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.29 11.31C15.4307 11.684 15.5019 12.0805 15.5 12.48C15.5 13.4083 15.1313 14.2985 14.4749 14.9549C13.8185 15.6112 12.9283 15.98 12 15.98C11.6005 15.9818 11.204 15.9107 10.83 15.77" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 20L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>}
                        </span>

                    </div>
                </div>
                <div className="remember-forgot" >
                    <div className="remember-me" >
                        <input type="checkbox" name="" id="" />
                        <p>Remeber Me</p>
                    </div>

                    <a href="#">Forgot Password?</a>
                </div>
                <div className="form-btn" >
                    <PrimaryButton type="submit" btnStyle={{ textTransform: "uppercase", cursor: "pointer" }} title="login" />
                    {/* <PrimaryButton type="submit" btnStyle={{ textTransform: "uppercase", cursor: "pointer" }} onClick={onLogin} title="login" /> */}
                </div>
            </form>
        </div>
    )
}

export default AuthForm;