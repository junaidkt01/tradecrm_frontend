import AuthForm from "../../components/Authentication/AuthForm/AuthForm"
import OnBoard from "../../components/Authentication/OnBoard/OnBoard"
import "./AuthPage.css"

const AuthPage = ({ onLogin }: { onLogin: () => void }) => {
    return (
        <div className="auth-page" >
            <OnBoard />
            <AuthForm onLogin={onLogin} />
        </div>
    )
}

export default AuthPage
