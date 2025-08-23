import StyledButton from "@components/StyledButton";

const AuthorizationPage = () => {
    return (
        <div className="bg-blue">
            <div className="authorization-header">Welcome to the tea shop!</div>
            <div className="subtitle">Please log in first.</div>
            <form className="email-form">
                {/* <input
                    type="email"
                    value=""
                    onChange={(e) => e.target.value}
                    placeholder="Email"
                /> */}
            </form>
            {/* <StyledButton label={"Sign up"} onClick={handleClick} /> */}
        </div>
    );
};

export default AuthorizationPage;
