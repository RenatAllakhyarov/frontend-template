const AuthorizationPage = () => {
    return (
        <div className="authorization-page">
            <div className="authorization-header">Welcome to the tea shop!</div>
            <div className="subtitle">Please log in first.</div>
            <form className="email-form">
                <input
                    type="email"
                    value=""
                    onChange={(e) => e.target.value}
                    placeholder="Email"
                />
            </form>
        </div>
    );
};

export default AuthorizationPage;
